import { ContextValue } from "@/hooks/useContextProps";
import React from "react";
import { AriaModalOverlayProps } from "react-aria";
import { OverlayTriggerState } from "react-stately";

interface ModalContextProps extends AriaModalOverlayProps {
  state: OverlayTriggerState;
}
type ModalContextValue = ContextValue<ModalContextProps, HTMLDivElement>;

export const ModalContext = React.createContext<ModalContextValue>(null);
export function ModalProvider({
  children,
  ...props
}: React.PropsWithChildren<ModalContextValue>) {
  return (
    <ModalContext.Provider value={props}>{children}</ModalContext.Provider>
  );
}
