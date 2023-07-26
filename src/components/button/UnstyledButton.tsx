import { useObjectRef } from "@react-aria/utils";
import React from "react";
import { AriaButtonProps, useButton } from "react-aria";

export interface UnstyledButtonProps extends AriaButtonProps {
  className?: string;
  children: React.ReactNode;
}

export const UnstyledButton = React.forwardRef<
  HTMLButtonElement,
  UnstyledButtonProps
>(({ className, children, ...props }, forwardedRef) => {
  const ref = useObjectRef(forwardedRef);
  const { buttonProps } = useButton(props, ref);

  return (
    <button {...buttonProps} className={className} ref={forwardedRef}>
      {children}
    </button>
  );
});

UnstyledButton.displayName = "UnstyledButton";
