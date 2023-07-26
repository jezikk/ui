import { ChevronDownIcon } from "@heroicons/react/20/solid";
import React from "react";
import { DescriptionMessage } from "../description-message";
import { ErrorMessage } from "../error-message";
import { Label } from "../label";

import {
  Select as RASelect,
  SelectProps as RASelectProps,
  SelectValue as RASelectValue,
  ListBox as RAListBox,
  Button as RAButton,
  Popover as RAPopover,
} from "react-aria-components";
import { FieldProps } from "@/types/FieldProps";

interface SelectFieldProps<TItem extends object>
  extends Omit<RASelectProps<TItem>, "children">,
    FieldProps {
  className?: string;
  children: React.ReactElement[] | ((item: TItem) => React.ReactElement);
  isReadOnly?: boolean;
}

function SelectField<TItem extends object>(
  props: SelectFieldProps<TItem>,
  forwardedRef: React.ForwardedRef<HTMLButtonElement>,
) {
  return (
    <RASelect {...props}>
      <Label isRequired={props.isRequired} className="mb-2">
        {props.label}
      </Label>

      <RAButton
        ref={forwardedRef}
        isDisabled={props.isDisabled}
        className="flex h-9 w-full items-center justify-between rounded-md border border-border bg-input px-3 py-1 text-sm text-input-foreground shadow-sm transition-colors placeholder:text-muted-foreground focus:border-input-border-accent focus:outline-none focus:ring-2 focus:ring-input-ring disabled:opacity-50 aria-invalid:border-error-300 aria-invalid:text-error-900 aria-invalid:placeholder:text-error-300 aria-invalid:focus:border-error-500 aria-invalid:focus:ring-error-200"
      >
        <RASelectValue className="data-[placeholder]:text-muted-foreground">
          {({ selectedText }) => {
            return selectedText ? selectedText : props.placeholder;
          }}
        </RASelectValue>
        {!(props.isDisabled || props.isReadOnly) && (
          <ChevronDownIcon
            className="h-4 w-4 text-foreground"
            aria-hidden="true"
          />
        )}
      </RAButton>

      <RAPopover className="min-w-[var(--trigger-width)] overflow-hidden rounded-md border border-border bg-background text-foreground shadow-md">
        <RAListBox className="max-h-72 overflow-auto p-1 outline-none">
          {props.children}
        </RAListBox>
      </RAPopover>

      <DescriptionMessage
        isHidden={
          props.validationState === "invalid" ||
          props.isDisabled ||
          props.isReadOnly
        }
        className="mt-2"
      >
        {props.description}
      </DescriptionMessage>

      <ErrorMessage className="mt-2">{props.errorMessage}</ErrorMessage>
    </RASelect>
  );
}

type SelectFieldWithRef = <TItem extends object>(
  props: SelectFieldProps<TItem>,
  forwardedRef: React.ForwardedRef<HTMLButtonElement>,
) => React.ReactElement;

const _SelectField = React.forwardRef(SelectField) as SelectFieldWithRef;
export { _SelectField as SelectField };
