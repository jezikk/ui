import { ContextValue } from "@/hooks/use-context-props";
import React from "react";
import { AriaRadioProps } from "react-aria";
import { RadioGroupState } from "react-stately";

type ToggleContextValue = ContextValue<
  Omit<AriaRadioProps, "value"> & {
    state: RadioGroupState;
    isError?: boolean;
    isReadOnly?: boolean;
    id?: string;
    value?: string;
  },
  HTMLInputElement
>;
type ToggleProviderProps = React.PropsWithChildren<ToggleContextValue>;

export const ToggleContext = React.createContext<ToggleContextValue>(null);

export function ToggleProvider({ children, ...props }: ToggleProviderProps) {
  return (
    <ToggleContext.Provider value={props}>{children}</ToggleContext.Provider>
  );
}
