import { useObjectRef } from "@react-aria/utils";
import React from "react";
import { AriaListBoxOptions, AriaListBoxProps, useListBox } from "react-aria";
import { ListState } from "react-stately";
import { Option } from "./Option";

interface ListBoxProps<TItem>
  extends AriaListBoxOptions<TItem>,
    Pick<AriaListBoxProps<TItem>, "children"> {
  className?: string;
  state: ListState<TItem>;
  onClose?: () => void;
}

function ListBox<TItem>(
  { className, state, onClose, ...props }: ListBoxProps<TItem>,
  forwarderRef: React.ForwardedRef<HTMLUListElement>,
) {
  const ref = useObjectRef(forwarderRef);
  const { listBoxProps } = useListBox(props, state, ref);

  return (
    <ul {...listBoxProps} ref={ref} className={className}>
      {[...state.collection].map((item) => (
        <Option key={item.key} item={item} state={state} onClose={onClose} />
      ))}
    </ul>
  );
}

type ListBoxWithRef = <TItem>(
  props: ListBoxProps<TItem>,
  ref: React.Ref<HTMLUListElement>,
) => React.ReactElement;

const _ListBox = React.forwardRef(ListBox) as ListBoxWithRef;
export { _ListBox as ListBox };
