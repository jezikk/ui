import { cn } from "@/lib/utils";
import { useRef } from "react";
import { useMenuItem } from "react-aria";
import { Node, TreeState } from "react-stately";

interface MenuItemProps {
  className?: string;
  item: Node<object>;
  state: TreeState<object>;
}

export function MenuItem({ className, item, state }: MenuItemProps) {
  const ref = useRef(null);
  const { menuItemProps, isFocused, isSelected, isDisabled } = useMenuItem(
    { key: item.key },
    state,
    ref,
  );

  const isDestroy = item.key.toString().includes("destroy");

  return (
    <li
      {...menuItemProps}
      className={cn(
        "flex items-center gap-x-2 rounded-md px-2 py-1.5 text-sm outline-none",
        isSelected && "font-semibold",
        isDisabled && "text-muted-foreground",
        isDestroy && "text-destructive",
        isFocused && !isDestroy && "bg-accent text-accent-foreground",
        isFocused && isDestroy && "bg-destructive text-destructive-foreground",
        className,
      )}
      ref={ref}
    >
      {item.rendered}
    </li>
  );
}
