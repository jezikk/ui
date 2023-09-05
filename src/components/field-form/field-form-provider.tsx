import { ContextValue } from "@/hooks/use-context-props";
import React from "react";

type FieldFormContextValue = ContextValue<
  { errorMessage?: React.ReactNode },
  HTMLDivElement
>;
type FieldFormProviderProps = React.PropsWithChildren<FieldFormContextValue>;

export const FieldFormContext =
  React.createContext<FieldFormContextValue>(null);
export function FieldFormProvider({
  children,
  ...props
}: FieldFormProviderProps) {
  return (
    <FieldFormContext.Provider value={props}>
      {children}
    </FieldFormContext.Provider>
  );
}
