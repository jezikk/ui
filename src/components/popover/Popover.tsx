import { useObjectRef } from "@/hooks";
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

export const Popover = React.forwardRef(function Popover(
  { className, state, offset = 8, children, ...props }: PopoverProps,
  forwardedRef: React.ForwardedRef<HTMLDivElement>
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
});
