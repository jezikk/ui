import { ContextValue } from "@/hooks/use-context-props";
import React from "react";
import { AriaDialogProps } from "react-aria";

interface DialogPropsWithState extends AriaDialogProps {
  close?: () => void;
}

type DialogContextValue = ContextValue<DialogPropsWithState, HTMLDivElement>;

export const DialogContext = React.createContext<DialogContextValue>(null);
export function DialogProvider({
  children,
  ...props
}: React.PropsWithChildren<DialogContextValue>) {
  return (
    <DialogContext.Provider value={props}>{children}</DialogContext.Provider>
  );
}
