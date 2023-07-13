import { useObjectRef } from "@react-aria/utils";
import React from "react";
import { AriaTextFieldProps, useTextField } from "react-aria";
import { DescriptionMessage } from "../description-message";
import { ErrorMessage } from "../error-message";
import { Label } from "../label";

interface TextFieldProps extends AriaTextFieldProps {
  className?: string;
}

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  function TextField({ className, ...props }, forwardedRef) {
    const ref = useObjectRef(forwardedRef);
    const { labelProps, inputProps, descriptionProps, errorMessageProps } =
      useTextField(props, ref);
    return (
      <div className={className}>
        <Label {...labelProps} isRequired={props.isRequired} className="mb-1.5">
          {props.label}
        </Label>

        <input
          {...inputProps}
          ref={ref}
          className="flex h-9 w-full rounded-md border border-border bg-input px-3 py-1 text-sm text-input-foreground shadow-sm transition-colors placeholder:text-foreground-muted focus:border-border-vivid focus:outline-none focus:ring-2 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
        />

        <DescriptionMessage {...descriptionProps} className="mt-1">
          {props.description}
        </DescriptionMessage>

        <ErrorMessage {...errorMessageProps} className="mt-1">
          {props.errorMessage}
        </ErrorMessage>
      </div>
    );
  }
);
