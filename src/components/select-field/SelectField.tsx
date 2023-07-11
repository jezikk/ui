import { useObjectRef } from "@/hooks";
import React from "react";
import { useSelect, AriaSelectProps, HiddenSelect } from "react-aria";
import { useSelectState } from "react-stately";
import { Label } from "../label";
import { Button } from "../button";
import { Popover } from "../popover";
import { ListBox } from "./Listbox";
import { DescriptionMessage } from "../description-message";
import { ErrorMessage } from "../error-message";

interface SelectFieldProps<TItem> extends AriaSelectProps<TItem> {
  className?: string;
  children: React.ReactElement | ((item: TItem) => React.ReactElement);
}

function SelectField<TItem extends object>(
  props: SelectFieldProps<TItem>,
  forwardedRef: React.ForwardedRef<HTMLButtonElement>
) {
  const triggerRef = useObjectRef(forwardedRef);
  const state = useSelectState(props);
  const {
    labelProps,
    triggerProps,
    valueProps,
    menuProps,
    errorMessageProps,
    descriptionProps,
  } = useSelect(props, state, triggerRef);

  return (
    <div className={props.className}>
      <Label {...labelProps} className="mb-1" />

      <HiddenSelect
        isDisabled={props.isDisabled}
        state={state}
        triggerRef={triggerRef}
        label={props.label}
        name={props.name}
      />

      <Button {...triggerProps} ref={triggerRef}>
        <span {...valueProps}>
          {state.selectedItem ? state.selectedItem.rendered : props.placeholder}
        </span>
        <span aria-hidden="true" style={{ paddingLeft: 5 }}>
          ▼
        </span>
      </Button>

      {state.isOpen && (
        <Popover state={state} triggerRef={triggerRef} placement="bottom start">
          <ListBox {...menuProps} state={state}>
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
export { _SelectField as SelectField };
