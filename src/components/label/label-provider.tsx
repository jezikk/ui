import { ContextValue } from "@/hooks/use-context-props";
import React, { LabelHTMLAttributes, ReactNode } from "react";

type LabelContextValue = ContextValue<
  LabelHTMLAttributes<HTMLLabelElement> & {
    isError?: boolean;
    isRequired?: boolean;
    label?: ReactNode;
  },
  HTMLLabelElement
>;
type LabelProviderProps = React.PropsWithChildren<LabelContextValue>;

export const LabelContext = React.createContext<LabelContextValue>(null);
export function LabelProvider({ children, ...props }: LabelProviderProps) {
  return (
    <LabelContext.Provider value={props}>{children}</LabelContext.Provider>
  );
}
