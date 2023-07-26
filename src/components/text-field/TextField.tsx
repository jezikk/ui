import React from "react";
import {
  TextField as RATextField,
  TextFieldProps as RATextFieldProps,
  Input,
} from "react-aria-components";
import { DescriptionMessage } from "../description-message";
import { ErrorMessage } from "../error-message";
import { Label } from "../label";
import { FieldProps } from "@/types/FieldProps";

export interface TextFieldProps extends RATextFieldProps, FieldProps {
  className?: string;
  placeholder?: string;
}

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  function TextField({ className, ...props }, forwardedRef) {
    return (
      <RATextField {...props} className={className}>
        <Label isRequired={props.isRequired} className="mb-2">
          {props.label}
        </Label>

        <Input
          ref={forwardedRef}
          className="flex h-9 w-full rounded-md border border-border bg-input px-3 py-1 text-sm text-input-foreground shadow-sm transition-colors placeholder:text-muted-foreground focus:border-input-border-accent focus:outline-none focus:ring-2 focus:ring-input-ring disabled:opacity-50 aria-invalid:border-error-300 aria-invalid:text-error-900 aria-invalid:placeholder:text-error-300 aria-invalid:focus:border-error-500 aria-invalid:focus:ring-error-200"
        />

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
      </RATextField>
    );
  },
);
