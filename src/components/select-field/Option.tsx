import { cn } from "@/lib/utils";
import React from "react";
import { AriaOptionProps, useOption } from "react-aria";
import { ListState, Node } from "react-stately";
import { CheckIcon } from "@heroicons/react/20/solid";

interface OptionProps<TItem> extends AriaOptionProps {
  state: ListState<TItem>;
  item: Node<TItem>;
}

export function Option<TItem>({ item, state, ...props }: OptionProps<TItem>) {
  const ref = React.useRef(null);
  const { optionProps, isSelected, isFocused } = useOption(
    { ...props, key: item.key },
    state,
    ref
  );

  return (
    <li
      {...optionProps}
      ref={ref}
      className={cn(
        "flex items-center justify-between gap-x-2 rounded-md px-2 py-1.5 text-sm outline-none",
        isSelected && "font-semibold",
        isFocused && "bg-accent text-accent-foreground"
      )}
    >
      <span>{item.rendered}</span>
      {isSelected ? <CheckIcon className="h-4 w-4" aria-hidden="true" /> : null}
    </li>
  );
}
