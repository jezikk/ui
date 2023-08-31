import { useContextProps } from "@/hooks/use-context-props";
import { AriaMenuProps, useMenu } from "react-aria";
import { MenuContext } from "./menu-provider";
import { MenuSection } from "./menu-section";
import { MenuItem } from "./menu-item";
import { useTreeState } from "react-stately";
import React from "react";
import { cn } from "@/lib/utils";

interface MenuProps<TItem> extends AriaMenuProps<TItem> {
  className?: string;
}

export const Menu = React.forwardRef<HTMLUListElement, MenuProps<object>>(
  ({ className, ...props }, forwardedRef) => {
    const [ctxProps, ref] = useContextProps(props, forwardedRef, MenuContext);
    const state = useTreeState(ctxProps);
    const { menuProps } = useMenu(ctxProps, state, ref);

    return (
      <ul
        {...menuProps}
        className={cn("min-w-[200px] p-1 outline-none", className)}
        ref={ref}
      >
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
