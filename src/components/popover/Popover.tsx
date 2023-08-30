import { useContextProps } from "@/hooks/use-context-props";
import { AnimatePresence, Variants, motion } from "framer-motion";
import React from "react";
import {
  AriaPopoverProps,
  DismissButton,
  Overlay,
  usePopover,
} from "react-aria";
import { OverlayTriggerState } from "react-stately";
import { PopoverContext } from ".";
import { cn } from "@/lib/utils";

interface PopoverProps
  extends Omit<AriaPopoverProps, "popoverRef" | "triggerRef"> {
  className?: string;
  state?: OverlayTriggerState;
  children: React.ReactNode;
  triggerRef?: React.RefObject<HTMLButtonElement>;
}

export const Popover = React.forwardRef<HTMLDivElement, PopoverProps>(
  function Popover(
    { className, offset = 8, children, ...props },
    forwardedRef,
  ) {
    const [ctx, popoverRef] = useContextProps(
      props,
      forwardedRef,
      PopoverContext,
    );

    const { popoverProps, underlayProps } = usePopover(
      {
        ...props,
        popoverRef,
        offset,
        triggerRef: ctx.triggerRef,
        placement: ctx.placement,
      },
      ctx.state,
    );

    const popoverVariants: Variants = {
      hide: {
        opacity: 0,
        scale: 0.95,
        transition: { duration: 0.075, ease: "easeOut" },
      },
      show: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.075, ease: "easeIn" },
      },
    };

    return (
      <AnimatePresence initial={false}>
        {ctx.state.isOpen && (
          <Overlay>
            <div {...underlayProps} className="fixed inset-0" />
            <div {...popoverProps} ref={popoverRef}>
              <motion.div
                variants={popoverVariants}
                initial="hide"
                animate="show"
                exit="hide"
                className={cn(
                  '"overflow-hidden shadow-md" rounded-md border border-border bg-background text-foreground',
                  className,
                )}
              >
                <DismissButton onDismiss={() => ctx.state.close()} />
                {children}
                <DismissButton onDismiss={() => ctx.state.close()} />
              </motion.div>
            </div>
          </Overlay>
        )}
      </AnimatePresence>
    );
  },
);
