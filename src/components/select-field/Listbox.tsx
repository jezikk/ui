import { useObjectRef } from "@react-aria/utils";
import { cn } from "@/lib/utils";
import React from "react";
import { AriaListBoxProps, useListBox } from "react-aria";
import { ListState } from "react-stately";
import { Option } from "./Option";

interface ListBoxProps<TItem> extends AriaListBoxProps<TItem> {
  className?: string;
  state: ListState<TItem>;
}

function ListBox<TItem>(
  { className, state, ...props }: ListBoxProps<TItem>,
  forwarderRef: React.ForwardedRef<HTMLUListElement>
) {
  const ref = useObjectRef(forwarderRef);
  const { listBoxProps } = useListBox(props, state, ref);

  return (
    <ul {...listBoxProps} ref={ref} className={cn("", className)}>
      {[...state.collection].map((item) => (
        <Option key={item.key} item={item} state={state} />
      ))}
    </ul>
  );
}

type ListBoxWithRef = <TItem>(
  props: ListBoxProps<TItem>,
  ref: React.Ref<HTMLUListElement>
) => React.ReactElement;

const _ListBox = React.forwardRef(ListBox) as ListBoxWithRef;
export { _ListBox as ListBox };
