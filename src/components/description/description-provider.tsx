import { ContextValue } from "@/hooks/use-context-props";
import React, { DOMAttributes } from "react";

type DescriptionContextValue = ContextValue<
  DOMAttributes<HTMLSpanElement> & {
    isHidden?: boolean;
    description?: React.ReactNode;
  },
  HTMLSpanElement
>;
type DescriptionProviderProps =
  React.PropsWithChildren<DescriptionContextValue>;

export const DescriptionContext =
  React.createContext<DescriptionContextValue>(null);

export function DescriptionProvider({
  children,
  ...props
}: DescriptionProviderProps) {
  return (
    <DescriptionContext.Provider value={props}>
      {children}
    </DescriptionContext.Provider>
  );
}
