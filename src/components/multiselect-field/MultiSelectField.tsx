import { useWidthObserver } from "@/hooks/useWidthObserver";
import { cn } from "@/lib/utils";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { useObjectRef } from "@react-aria/utils";
import React, { Key, useMemo, useRef } from "react";
import {
  useField,
  mergeProps,
  useOverlayTrigger,
  useKeyboard,
} from "react-aria";
import { DescriptionMessage } from "../description-message";
import { ErrorMessage } from "../error-message";
import { Label } from "../label";
import { Popover } from "./Popover";
import { ListBox } from "./Listbox";
import { FieldProps } from "@/types/FieldProps";
import { Button as RAButton } from "react-aria-components";
import {
  useOverlayTriggerState,
  OverlayTriggerProps,
  useListState,
  ListProps,
  Item,
} from "react-stately";

interface MultiSelectFieldProps<TItem>
  extends FieldProps,
    OverlayTriggerProps,
    Omit<
      ListProps<TItem>,
      "onSelectionChange" | "selectedKeys" | "defaultSelectedKeys"
    > {
  className?: string;
  children: MultiSelectChildren<TItem>;
  isRequired?: boolean;
  isDisabled?: boolean;
  name?: string;
  placeholder?: React.ReactNode;
  onSelectionChange?: (keys: Key[]) => void;
  selectedKeys?: Key[];
  defaultSelectedKeys?: Key[];
}

type MultiSelectChildren<TItem> =
  | React.ReactElement[]
  | ((item: TItem) => React.ReactElement);

function mapKeys(
  keys?: Key[],
  items?: Iterable<unknown>,
  children?: MultiSelectChildren<unknown>,
) {
  if (!keys) return;

  let count = 0;

  if (items) {
    count = [...items].length;
  } else if (Array.isArray(children)) {
    count = children.length;
  }

  return keys.length === count ? "all" : keys;
}

function MultiSelectField<TItem extends object>(
  props: MultiSelectFieldProps<TItem>,
  forwardedRef: React.ForwardedRef<HTMLButtonElement>,
) {
  // Refs
  const triggerRef = useObjectRef(forwardedRef);
  const popoverRef = useRef<HTMLDivElement>(null);

  // States
  const popoverState = useOverlayTriggerState(props);
  const listState = useListState({
    ...props,
    selectionMode: "multiple",
    defaultSelectedKeys: mapKeys(props.defaultSelectedKeys),
    selectedKeys: mapKeys(props.selectedKeys),
    onSelectionChange: (keys) => {
      props.onSelectionChange?.(
        keys === "all" ? [...listState.collection.getKeys()] : [...keys],
      );
    },
  });

  // Props
  const { labelProps, fieldProps, descriptionProps, errorMessageProps } =
    useField(props);

  const { triggerProps, overlayProps } = useOverlayTrigger(
    { type: "listbox" },
    popoverState,
    triggerRef,
  );

  const { keyboardProps: triggerKeyboardProps } = useKeyboard({
    onKeyDown: (e) => {
      if (e.key === "ArrowUp" || e.key === "ArrowDown") {
        popoverState.open();
      }
      e.continuePropagation();
    },
  });

  // Width observer
  useWidthObserver(triggerRef, (width) => {
    if (popoverRef.current) {
      popoverRef.current.style.minWidth = width;
    }
  });

  // Render text value
  const textValue = useMemo(() => {
    if (listState.selectionManager.isEmpty) {
      return props.placeholder;
    }

    if (listState.selectionManager.isSelectAll) {
      return "All";
    }

    return [...listState.selectionManager.selectedKeys]
      .map((key) => listState.collection.getItem?.(key)?.rendered)
      .join(", ");
  }, [
    props.placeholder,
    listState.selectionManager.selectedKeys,
    listState.selectionManager.isEmpty,
    listState.selectionManager.isSelectAll,
    listState.collection,
  ]);

  return (
    <div className={props.className}>
      <Label {...labelProps} isRequired={props.isRequired} className="mb-1.5">
        {props.label}
      </Label>

      <RAButton
        {...mergeProps(triggerProps, triggerKeyboardProps)}
        ref={triggerRef}
        className="flex h-9 w-full items-center justify-between rounded-md border border-border bg-input px-3 py-1 text-sm text-input-foreground shadow-sm focus:border-border-vivid focus:outline-none focus:ring-2 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
      >
        <span
          className={cn(
            "truncate",
            listState.selectionManager.isEmpty && "text-foreground-muted",
          )}
        >
          {textValue}
        </span>

        {!props.isDisabled && (
          <ChevronUpDownIcon
            className="h-4 w-4 text-foreground"
            aria-hidden="true"
          />
        )}
      </RAButton>

      {popoverState.isOpen && (
        <Popover
          ref={popoverRef}
          state={popoverState}
          triggerRef={triggerRef}
          placement="bottom start"
          className="overflow-hidden rounded-md border border-border bg-background text-foreground shadow-md"
        >
          <ListBox
            {...mergeProps(overlayProps, fieldProps)}
            state={listState}
            autoFocus
            className="max-h-72 overflow-auto p-1 outline-none"
            onClose={() => popoverState.close()}
          >
            {props.children}
          </ListBox>
        </Popover>
      )}

      <DescriptionMessage {...descriptionProps} className="mt-1">
        {props.description}
      </DescriptionMessage>

      <ErrorMessage {...errorMessageProps} className="mt-1">
        {props.errorMessage}
      </ErrorMessage>
    </div>
  );
}

type MultiSelectFieldWithRef = <TItem>(
  props: MultiSelectFieldProps<TItem>,
  forwardedRef: React.ForwardedRef<HTMLButtonElement>,
) => React.ReactElement;

const _MultiSelectField = React.forwardRef(
  MultiSelectField,
) as MultiSelectFieldWithRef;
export { _MultiSelectField as MultiSelectField, Item as MultiSelectItem };
