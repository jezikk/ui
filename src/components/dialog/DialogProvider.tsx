import { ContextValue } from "@/hooks/useContextProps";
import React from "react";
import { AriaDialogProps } from "react-aria";

type DialogContextValue = ContextValue<AriaDialogProps, HTMLDivElement>;

export const DialogContext = React.createContext<DialogContextValue>(null);
export function DialogProvider({
  children,
  ...props
}: React.PropsWithChildren<DialogContextValue>) {
  return (
    <DialogContext.Provider value={props}>{children}</DialogContext.Provider>
  );
}
