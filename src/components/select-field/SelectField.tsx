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
}

function SelectField<TItem extends object>(
  props: SelectFieldProps<TItem>,
  forwardedRef: React.ForwardedRef<HTMLButtonElement>,
) {
  return (
    <RASelect className={props.className}>
      <Label isRequired={props.isRequired} className="mb-1.5">
        {props.label}
      </Label>

      <RAButton
        ref={forwardedRef}
        className="flex h-9 w-full items-center justify-between rounded-md border border-border bg-input px-3 py-1 text-sm text-input-foreground shadow-sm focus:border-border-vivid focus:outline-none focus:ring-2 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
      >
        <RASelectValue className="data-[placeholder]:text-foreground-muted">
          {({ selectedText }) => {
            return selectedText ? selectedText : props.placeholder;
          }}
        </RASelectValue>
        {!props.isDisabled && (
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

      <DescriptionMessage className="mt-1">
        {props.description}
      </DescriptionMessage>

      <ErrorMessage className="mt-1">{props.errorMessage}</ErrorMessage>
    </RASelect>
  );
}

type SelectFieldWithRef = <TItem extends object>(
  props: SelectFieldProps<TItem>,
  forwardedRef: React.ForwardedRef<HTMLButtonElement>,
) => React.ReactElement;

const _SelectField = React.forwardRef(SelectField) as SelectFieldWithRef;
export { _SelectField as SelectField };
