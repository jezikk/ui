import { useObjectRef } from "@react-aria/utils";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import React, { useRef } from "react";
import { AriaSelectProps, HiddenSelect, useSelect } from "react-aria";
import { Item, useSelectState } from "react-stately";
import { UnstyledButton } from "../button";
import { DescriptionMessage } from "../description-message";
import { ErrorMessage } from "../error-message";
import { Label } from "../label";
import { Popover } from "../popover";
import { ListBox } from "./Listbox";
import { cn } from "@/lib/utils";
import { useWidthObserver } from "@/hooks/useWidthObserver";

interface SelectFieldProps<TItem> extends AriaSelectProps<TItem> {
  className?: string;
  children: React.ReactElement[] | ((item: TItem) => React.ReactElement);
}

function SelectField<TItem extends object>(
  props: SelectFieldProps<TItem>,
  forwardedRef: React.ForwardedRef<HTMLButtonElement>
) {
  const triggerRef = useObjectRef(forwardedRef);
  const popoverRef = useRef<HTMLDivElement>(null);

  const state = useSelectState(props);
  const {
    labelProps,
    triggerProps,
    valueProps,
    menuProps,
    errorMessageProps,
    descriptionProps,
  } = useSelect(props, state, triggerRef);

  useWidthObserver(triggerRef, (width) => {
    if (popoverRef.current) {
      popoverRef.current.style.minWidth = width;
    }
  });

  return (
    <div className={props.className}>
      <Label {...labelProps} isRequired={props.isRequired} className="mb-1.5">
        {props.label}
      </Label>

      <HiddenSelect
        isDisabled={props.isDisabled}
        state={state}
        triggerRef={triggerRef}
        label={props.label}
        name={props.name}
      />

      <UnstyledButton
        {...triggerProps}
        ref={triggerRef}
        className="flex h-9 w-full items-center justify-between rounded-md border border-border bg-input px-3 py-1 text-sm text-input-foreground shadow-sm focus:border-border-vivid focus:outline-none focus:ring-2 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
      >
        <span
          {...valueProps}
          className={cn(!state.selectedItem && "text-foreground-muted")}
        >
          {state.selectedItem ? state.selectedItem.rendered : props.placeholder}
        </span>
        {!props.isDisabled && (
          <ChevronDownIcon
            className="h-4 w-4 text-foreground"
            aria-hidden="true"
          />
        )}
      </UnstyledButton>

      {state.isOpen && (
        <Popover
          ref={popoverRef}
          state={state}
          triggerRef={triggerRef}
          placement="bottom start"
          className="overflow-hidden rounded-md border border-border bg-background text-foreground shadow-md"
        >
          <ListBox
            {...menuProps}
            state={state}
            className="max-h-72 overflow-auto p-1 outline-none"
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

type SelectFieldWithRef = <TItem>(
  props: SelectFieldProps<TItem>,
  forwardedRef: React.ForwardedRef<HTMLButtonElement>
) => React.ReactElement;

const _SelectField = React.forwardRef(SelectField) as SelectFieldWithRef;
export { _SelectField as SelectField, Item as SelectItem };
