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

  return (
    <li {...menuItemProps} className={className} ref={ref}>
      {item.rendered}
    </li>
  );
}
