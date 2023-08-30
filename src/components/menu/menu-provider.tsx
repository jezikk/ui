import { ContextValue } from "@/hooks/use-context-props";
import React from "react";
import { AriaMenuOptions } from "react-aria";

type MenuContextValue = ContextValue<AriaMenuOptions<object>, HTMLUListElement>;

export const MenuContext = React.createContext<MenuContextValue>(null);
export function MenuProvider({
  children,
  ...props
}: React.PropsWithChildren<MenuContextValue>) {
  return <MenuContext.Provider value={props}>{children}</MenuContext.Provider>;
}
