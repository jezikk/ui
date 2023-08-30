import { ContextValue } from "@/hooks/use-context-props";
import React, { createContext } from "react";
import { AriaButtonProps } from "react-aria";

type ButtonContextValue = ContextValue<AriaButtonProps, HTMLButtonElement>;

export const ButtonContext = createContext<ButtonContextValue>(null);
export const ButtonProvider = React.forwardRef<
  HTMLButtonElement,
  React.PropsWithChildren<ButtonContextValue>
>(({ children, ...props }, ref) => {
  return (
    <ButtonContext.Provider value={{ ...props, ref }}>
      {children}
    </ButtonContext.Provider>
  );
});

ButtonProvider.displayName = "ButtonProvider";
