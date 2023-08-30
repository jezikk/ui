import { useContextProps } from "@/hooks/use-context-props";
import React from "react";
import { AriaModalOverlayProps, Overlay, useModalOverlay } from "react-aria";
import { OverlayTriggerState } from "react-stately";
import { ModalContext } from "./modal-provider";
import { AnimatePresence, Variants, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { XMarkIcon } from "@heroicons/react/20/solid";

interface ModalProps extends AriaModalOverlayProps {
  state?: OverlayTriggerState;
  className?: string;
  children: React.ReactNode;
}

export const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  ({ className, children, isDismissable = true, ...props }, forwardedRef) => {
    const [{ state: ctxState, ...ctxProps }, ref] = useContextProps(
      props,
      forwardedRef,
      ModalContext,
    );

    const { modalProps, underlayProps } = useModalOverlay(
      { ...ctxProps, isDismissable },
      ctxState,
      ref,
    );

    const backdropVariants: Variants = {
      hide: {
        opacity: 0,
        backdropFilter: "blur(0px)",
        WebkitBackdropFilter: "blur(0px)",
        transition: { ease: "easeOut", duration: 0.075 },
      },
      show: {
        opacity: 1,
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
        transition: { ease: "easeIn", duration: 0.1 },
      },
    };

    const modalVariants: Variants = {
      hide: {
        opacity: 0,
        top: "37%",
        transition: { ease: "easeOut", duration: 0.075 },
      },
      show: {
        opacity: 1,
        top: "40%",
        transition: { ease: "easeIn", duration: 0.1 },
      },
    };

    return (
      <AnimatePresence initial={false}>
        {ctxState.isOpen && (
          <Overlay>
            <div {...underlayProps}>
              <motion.div
                variants={backdropVariants}
                initial="hide"
                animate="show"
                exit="hide"
                className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
              />
            </div>
            <div {...modalProps} ref={ref}>
              <motion.div
                variants={modalVariants}
                initial="hide"
                animate="show"
                exit="hide"
                className={cn(
                  "fixed left-[50%] z-50 w-full max-w-lg translate-x-[-50%] translate-y-[-50%] rounded-lg border border-border bg-background p-6 text-foreground shadow-lg",
                  className,
                )}
              >
                {isDismissable && (
                  <button
                    type="button"
                    className="absolute right-5 top-5 rounded-md p-1 text-muted-foreground hover:cursor-pointer hover:bg-accent"
                    onClick={() => ctxState.close()}
                  >
                    <XMarkIcon className="h-5 w-5" aria-hidden={true} />
                    <span className="sr-only">Close</span>
                  </button>
                )}
                {children}
              </motion.div>
            </div>
          </Overlay>
        )}
      </AnimatePresence>
    );
  },
);

Modal.displayName = "Modal";
