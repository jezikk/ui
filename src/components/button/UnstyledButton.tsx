import { useObjectRef } from "@react-aria/utils";
import React from "react";
import { AriaButtonProps, useButton } from "react-aria";

export interface UnstyledButtonProps extends AriaButtonProps<"button"> {
  className?: string;
  children: React.ReactNode;
}

export const UnstyledButton = React.forwardRef<
  HTMLButtonElement,
  UnstyledButtonProps
>(function UnstyledButton({ className, ...props }, forwardedRef) {
  const buttonRef = useObjectRef(forwardedRef);
  const { buttonProps } = useButton(props, buttonRef);
  return (
    <button {...buttonProps} ref={buttonRef} className={className}>
      {props.children}
    </button>
  );
});
