import { useContextProps } from "@/hooks/use-context-props";
import { AriaMenuProps, useMenu } from "react-aria";
import { MenuContext, MenuSection } from ".";
import { MenuItem } from "./menu-item";
import { useTreeState } from "react-stately";
import React from "react";

interface MenuProps<TItem> extends AriaMenuProps<TItem> {
  className?: string;
}

export const Menu = React.forwardRef<HTMLUListElement, MenuProps<object>>(
  ({ className, ...props }, forwardedRef) => {
    const [ctxProps, ref] = useContextProps(props, forwardedRef, MenuContext);
    const state = useTreeState(ctxProps);
    const { menuProps } = useMenu(ctxProps, state, ref);

    return (
      <ul {...menuProps} className={className} ref={ref}>
        {[...state.collection].map((item) =>
          item.type === "section" ? (
            <MenuSection key={item.key} section={item} state={state} />
          ) : (
            <MenuItem key={item.key} item={item} state={state} />
          ),
        )}
      </ul>
    );
  },
);

Menu.displayName = "Menu";
