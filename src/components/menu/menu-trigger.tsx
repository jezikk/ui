import React from "react";
import { AriaMenuTriggerProps, useMenuTrigger } from "react-aria";
import {
  useMenuTriggerState,
  MenuTriggerProps as MenuTriggerStateProps,
} from "react-stately";
import { ButtonProvider } from "../button";
import { MenuProvider } from ".";
import { PopoverProvider } from "../popover";

interface MenuTriggerProps
  extends MenuTriggerStateProps,
    Omit<AriaMenuTriggerProps, "type"> {
  children: React.ReactNode;
}

export function MenuTrigger({ children, ...props }: MenuTriggerProps) {
  const state = useMenuTriggerState(props);

  const ref = React.useRef<HTMLButtonElement>(null);
  const { menuTriggerProps, menuProps } = useMenuTrigger<object>(
    { ...props, type: "menu" },
    state,
    ref,
  );

  return (
    <ButtonProvider {...menuTriggerProps} ref={ref}>
      <PopoverProvider state={state} triggerRef={ref} placement="bottom end">
        <MenuProvider {...menuProps}>{children}</MenuProvider>
      </PopoverProvider>
    </ButtonProvider>
  );
}
