import { useContextProps } from "@/hooks/useContextProps";
import React from "react";
import { AriaModalOverlayProps, Overlay, useModalOverlay } from "react-aria";
import { OverlayTriggerState } from "react-stately";
import { ModalContext } from "./ModalProvider";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ModalProps extends AriaModalOverlayProps {
  state?: OverlayTriggerState;
  className?: string;
  children: React.ReactNode;
}

export const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  ({ className, children, ...props }, forwardedRef) => {
    const [{ state, ...ctxProps }, ref] = useContextProps(
      props,
      forwardedRef,
      ModalContext,
    );
    const { modalProps, underlayProps } = useModalOverlay(
      { isDismissable: true, ...ctxProps },
      state,
      ref,
    );
    return (
      <AnimatePresence initial={false}>
        {state.isOpen && (
          <Overlay>
            <div {...underlayProps}>
              <motion.div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm" />
            </div>
            <div {...modalProps} ref={ref}>
              <motion.div
                className={cn(
                  "fixed left-[50%] top-[50%] z-50 w-full max-w-lg translate-x-[-50%] translate-y-[-50%] border border-border bg-background p-6 text-foreground shadow-lg",
                  className,
                )}
              >
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
