import { ContextValue } from "@/hooks/use-context-props";
import React from "react";
import { AriaPopoverProps } from "react-aria";
import { OverlayTriggerState } from "react-stately";

interface PopoverValue extends Omit<AriaPopoverProps, "popoverRef"> {
  state: OverlayTriggerState;
}

type PopoverContextValue = ContextValue<PopoverValue, HTMLDivElement>;

export const PopoverContext = React.createContext<PopoverContextValue>(null);
export function PopoverProvider({
  children,
  ...props
}: React.PropsWithChildren<PopoverContextValue>) {
  return (
    <PopoverContext.Provider value={props}>{children}</PopoverContext.Provider>
  );
}
