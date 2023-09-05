import { ContextValue } from "@/hooks/use-context-props";
import React, { DOMAttributes } from "react";

type ErrorMessageContextValue = ContextValue<
  DOMAttributes<HTMLSpanElement> & { errorMessage?: React.ReactNode },
  HTMLSpanElement
>;
type ErrorMessageProviderProps =
  React.PropsWithChildren<ErrorMessageContextValue>;

export const ErrorMessageContext =
  React.createContext<ErrorMessageContextValue>(null);

export function ErrorMessageProvider({
  children,
  ...props
}: ErrorMessageProviderProps) {
  return (
    <ErrorMessageContext.Provider value={props}>
      {children}
    </ErrorMessageContext.Provider>
  );
}
