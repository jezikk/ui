import React from "react";
import { AriaOptionProps, useOption } from "react-aria";
import { ListState, Node } from "react-stately";

interface OptionProps<TItem> extends AriaOptionProps {
  state: ListState<TItem>;
  item: Node<TItem>;
}

export function Option<TItem>({ item, state, ...props }: OptionProps<TItem>) {
  const ref = React.useRef(null);
  const { optionProps, isSelected } = useOption(props, state, ref);

  return (
    <li {...optionProps} ref={ref}>
      {item.rendered}
      {isSelected ? <span>✓</span> : null}
    </li>
  );
}
