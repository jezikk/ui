import { ContextValue } from "@/hooks/use-context-props";
import React, { DOMAttributes } from "react";

type HeadingContextValue = ContextValue<
  DOMAttributes<Element> & { level: number },
  HTMLHeadingElement
>;
type HeadingProviderProps = React.PropsWithChildren<HeadingContextValue>;

export const HeadingContext = React.createContext<HeadingContextValue>(null);
export function HeadingProvider({ children, ...props }: HeadingProviderProps) {
  return (
    <HeadingContext.Provider value={props}>{children}</HeadingContext.Provider>
  );
}
