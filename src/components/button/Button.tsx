import { useObjectRef } from "@/hooks";
import { cn } from "@/lib/utils";
import React from "react";
import { AriaButtonProps, useButton } from "react-aria";

export interface ButtonProps extends AriaButtonProps<"button"> {
  className?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button({ className, ...props }, forwardedRef) {
    const buttonRef = useObjectRef(forwardedRef);
    const { buttonProps } = useButton(props, buttonRef);
    return (
      <button {...buttonProps} ref={buttonRef} className={cn(className)}>
        {props.children}
      </button>
    );
  }
);
