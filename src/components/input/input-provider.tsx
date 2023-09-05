import { ContextValue } from "@/hooks/use-context-props";
import React, { InputHTMLAttributes } from "react";

type InputContextValue = ContextValue<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
type InputProviderProps = React.PropsWithChildren<InputContextValue>;

export const InputContext = React.createContext<InputContextValue>(null);

export const InputProvider = React.forwardRef<
  HTMLInputElement,
  InputProviderProps
>(({ children, ...props }, ref) => {
  return (
    <InputContext.Provider value={{ ...props, ref }}>
      {children}
    </InputContext.Provider>
  );
});

InputProvider.displayName = "InputProvider";
