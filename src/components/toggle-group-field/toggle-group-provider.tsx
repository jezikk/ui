import { ContextValue } from "@/hooks/use-context-props";
import React, { DOMAttributes } from "react";

type ToggleGroupContextValue = ContextValue<
  DOMAttributes<HTMLDivElement> & {
    isError?: boolean;
  },
  HTMLDivElement
>;
type ToggleGroupProviderProps =
  React.PropsWithChildren<ToggleGroupContextValue>;

export const ToggleGroupContext =
  React.createContext<ToggleGroupContextValue>(null);

export const ToggleGroupProvider = React.forwardRef<
  HTMLDivElement,
  ToggleGroupProviderProps
>(({ children, ...props }, ref) => {
  return (
    <ToggleGroupContext.Provider value={{ ...props, ref }}>
      {children}
    </ToggleGroupContext.Provider>
  );
});

ToggleGroupProvider.displayName = "ToggleGroupProvider";
