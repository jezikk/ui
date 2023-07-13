import { useObjectRef } from "@react-aria/utils";
import { cn } from "@/lib/utils";
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
    forwardedRef
  ) {
    const popoverRef = useObjectRef(forwardedRef);
    const { popoverProps, underlayProps } = usePopover(
      { ...props, popoverRef, offset },
      state
    );
    return (
      <Overlay>
        <div {...underlayProps} className="fixed inset-0" />
        <div {...popoverProps} ref={popoverRef} className={cn("", className)}>
          <DismissButton onDismiss={() => state.close()} />
          {children}
          <DismissButton onDismiss={() => state.close()} />
        </div>
      </Overlay>
    );
  }
);
