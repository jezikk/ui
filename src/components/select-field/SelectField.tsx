import { useObjectRef } from "@react-aria/utils";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import React, { useRef } from "react";
import {
  HiddenSelect,
  useSelect,
  useKeyboard,
  mergeProps,
  AriaSelectOptions,
} from "react-aria";
import { Item, SelectStateOptions, useSelectState } from "react-stately";
import { UnstyledButton } from "../button";
import { DescriptionMessage } from "../description-message";
import { ErrorMessage } from "../error-message";
import { Label } from "../label";
import { Popover } from "./Popover";
import { ListBox } from "./Listbox";
import { cn } from "@/lib/utils";
import { useWidthObserver } from "@/hooks/useWidthObserver";

interface SelectFieldProps<TItem>
  extends AriaSelectOptions<TItem>,
    SelectStateOptions<TItem> {
  children: React.ReactElement[] | ((item: TItem) => React.ReactElement);
  className?: string;
  isReadOnly?: boolean;
}

function SelectField<TItem extends object>(
  props: SelectFieldProps<TItem>,
  forwardedRef: React.ForwardedRef<HTMLButtonElement>,
) {
  const isError = props.validationState === "invalid";
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

  const { keyboardProps } = useKeyboard({
    onKeyDown: (e) => {
      if (e.key === "ArrowUp" || e.key === "ArrowDown") {
        state.open();
      }
      e.continuePropagation();
    },
  });

  useWidthObserver(triggerRef, (width) => {
    if (popoverRef.current) {
      popoverRef.current.style.minWidth = width;
    }
  });

  return (
    <div className={props.className}>
      <Label {...labelProps} isRequired={props.isRequired} className="mb-2">
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
        {...mergeProps(triggerProps, keyboardProps)}
        isDisabled={props.isDisabled}
        ref={triggerRef}
        className={cn(
          "flex h-9 w-full items-center justify-between rounded-md border border-border bg-input px-3 py-1 text-sm text-input-foreground shadow-sm transition-colors placeholder:text-muted-foreground focus:border-input-border-accent focus:outline-none focus:ring-2 focus:ring-input-ring disabled:opacity-50",
          isError &&
            "border-error-300 text-error-900 focus:border-error-500 focus:ring-error-200",
        )}
      >
        <span
          {...valueProps}
          className={cn(
            !state.selectedItem &&
              (isError ? "text-error-300" : "text-muted-foreground"),
          )}
        >
          {state.selectedItem ? state.selectedItem.rendered : props.placeholder}
        </span>
        {!(props.isDisabled || props.isReadOnly) && (
          <ChevronDownIcon
            className={cn(
              "h-4 w-4 text-foreground",
              isError && "text-error-900",
            )}
            aria-hidden="true"
          />
        )}
      </UnstyledButton>

      {state.isOpen && !props.isReadOnly && (
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

      <DescriptionMessage
        {...descriptionProps}
        isHidden={isError || props.isDisabled || props.isReadOnly}
        className="mt-2"
      >
        {props.description}
      </DescriptionMessage>

      <ErrorMessage {...errorMessageProps} className="mt-2">
        {props.errorMessage}
      </ErrorMessage>
    </div>
  );
}

type SelectFieldWithRef = <TItem>(
  props: SelectFieldProps<TItem>,
  forwardedRef: React.ForwardedRef<HTMLButtonElement>,
) => React.ReactElement;

const _SelectField = React.forwardRef(SelectField) as SelectFieldWithRef;
export { _SelectField as SelectField, Item as SelectItem };
