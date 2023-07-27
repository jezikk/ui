import React from "react";
import { DescriptionMessage } from "../description-message";
import { ErrorMessage } from "../error-message";
import { Label } from "../label";
import { AriaTextFieldProps, useTextField } from "react-aria";
import { useObjectRef } from "@react-aria/utils";

export interface TextFieldProps extends AriaTextFieldProps {
  className?: string;
}

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  function TextField({ className, ...props }, forwardedRef) {
    const ref = useObjectRef(forwardedRef);
    const { labelProps, inputProps, descriptionProps, errorMessageProps } =
      useTextField(props, ref);

    return (
      <div className={className}>
        <Label {...labelProps} isRequired={props.isRequired} className="mb-2">
          {props.label}
        </Label>

        <input
          {...inputProps}
          ref={ref}
          className="flex h-9 w-full rounded-md border border-border bg-input px-3 py-1 text-sm text-input-foreground shadow-sm transition-colors placeholder:text-muted-foreground focus:border-input-border-accent focus:outline-none focus:ring-2 focus:ring-input-ring disabled:opacity-50 aria-invalid:border-error-300 aria-invalid:text-error-900 aria-invalid:placeholder:text-error-300 aria-invalid:focus:border-error-500 aria-invalid:focus:ring-error-200"
        />

        <DescriptionMessage
          {...descriptionProps}
          isHidden={
            props.validationState === "invalid" ||
            props.isDisabled ||
            props.isReadOnly
          }
          className="mt-2"
        >
          {props.description}
        </DescriptionMessage>

        <ErrorMessage {...errorMessageProps} className="mt-2">
          {props.errorMessage}
        </ErrorMessage>
      </div>
    );
  },
);
