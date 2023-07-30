import { ContextValue } from "@/hooks/useContextProps";
import { createContext } from "react";
import { AriaButtonProps } from "react-aria";

type ButtonContextValue = ContextValue<AriaButtonProps, HTMLButtonElement>;

export const ButtonContext = createContext<ButtonContextValue>(null);
export function ButtonProvider({
  children,
  ...props
}: React.PropsWithChildren<ButtonContextValue>) {
  return (
    <ButtonContext.Provider value={props}>{children}</ButtonContext.Provider>
  );
}
