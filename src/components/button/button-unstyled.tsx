import { useContextProps } from "@/hooks/use-context-props";
import React from "react";
import {
  AriaButtonProps,
  mergeProps,
  useButton,
  useFocusRing,
} from "react-aria";
import { ButtonContext } from "./button-provider";

export interface UnstyledButtonProps extends AriaButtonProps {
  className?: string;
  children: React.ReactNode;
}

export const UnstyledButton = React.forwardRef<
  HTMLButtonElement,
  UnstyledButtonProps
>(({ className, children, ...props }, forwardedRef) => {
  const [ctxProps, ref] = useContextProps(props, forwardedRef, ButtonContext);
  const { buttonProps } = useButton(ctxProps, ref);
  const { focusProps, isFocusVisible } = useFocusRing();

  return (
    <button
      {...mergeProps(buttonProps, focusProps)}
      className={className}
      ref={ref}
      data-focus-visible={isFocusVisible ? true : undefined}
    >
      {children}
    </button>
  );
});

UnstyledButton.displayName = "UnstyledButton";
