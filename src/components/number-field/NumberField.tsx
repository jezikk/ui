import React from "react";
import { Label } from "../label";
import { DescriptionMessage } from "../description-message";
import { ErrorMessage } from "../error-message";
import {
  NumberField as RANumberField,
  NumberFieldProps as RANumberFieldProps,
  Input,
} from "react-aria-components";
import { FieldProps } from "@/types/FieldProps";

interface NumberFieldProps extends RANumberFieldProps, FieldProps {
  className?: string;
}

export const NumberField = React.forwardRef<HTMLInputElement, NumberFieldProps>(
  function NumberField({ className, ...props }, forwardedRef) {
    return (
      <RANumberField {...props} className={className}>
        <Label isRequired={props.isRequired} className="mb-1.5">
          {props.label}
        </Label>

        <Input
          ref={forwardedRef}
          className="flex h-9 w-full rounded-md border border-border bg-input px-3 py-1 text-sm text-input-foreground shadow-sm transition-colors placeholder:text-foreground-muted focus:border-border-vivid focus:outline-none focus:ring-2 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
        />

        <DescriptionMessage className="mt-1">
          {props.description}
        </DescriptionMessage>

        <ErrorMessage className="mt-1">{props.errorMessage}</ErrorMessage>
      </RANumberField>
    );
  },
);
