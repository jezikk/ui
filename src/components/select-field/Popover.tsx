import { useObjectRef } from "@react-aria/utils";
import { Variants, motion } from "framer-motion";
import React from "react";
import {
  AriaPopoverProps,
  DismissButton,
  Overlay,
  usePopover,
} from "react-aria";
import { OverlayTriggerState } from "react-stately";

interface PopoverProps extends Omit<AriaPopoverProps, "popoverRef"> {
  className?: string;
  state: OverlayTriggerState;
  children: React.ReactNode;
}

export const Popover = React.forwardRef<HTMLDivElement, PopoverProps>(
  function Popover(
    { className, state, offset = 8, children, ...props },
    forwardedRef,
  ) {
    const popoverRef = useObjectRef(forwardedRef);
    const { popoverProps, underlayProps } = usePopover(
      { ...props, popoverRef, offset },
      state,
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
      <Overlay>
        <div {...underlayProps} className="fixed inset-0" />
        <div {...popoverProps} ref={popoverRef}>
          <motion.div
            variants={popoverVariants}
            initial="hide"
            animate="show"
            exit="hide"
            className={className}
          >
            <DismissButton onDismiss={() => state.close()} />
            {children}
            <DismissButton onDismiss={() => state.close()} />
          </motion.div>
        </div>
      </Overlay>
    );
  },
);
