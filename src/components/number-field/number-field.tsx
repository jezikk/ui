import React from "react";
import { Label } from "../label";
import { Description } from "../description";
import { ErrorMessage } from "../error-message";
import { AriaNumberFieldProps, useLocale, useNumberField } from "react-aria";
import { NumberFieldStateOptions, useNumberFieldState } from "react-stately";
import { useObjectRef } from "@react-aria/utils";

interface NumberFieldProps
  extends AriaNumberFieldProps,
    Omit<NumberFieldStateOptions, "locale"> {
  className?: string;
}

export const NumberField = React.forwardRef<HTMLInputElement, NumberFieldProps>(
  function NumberField({ className, ...props }, forwardedRef) {
    const ref = useObjectRef(forwardedRef);
    const { locale } = useLocale();
    const state = useNumberFieldState({ ...props, locale });
    const { labelProps, inputProps, descriptionProps, errorMessageProps } =
      useNumberField(props, state, ref);

    return (
      <div className={className}>
        <Label {...labelProps} isRequired={props.isRequired} className="mb-2">
          {props.label}
        </Label>

        <input
          {...inputProps}
          ref={ref}
          className="flex h-9 w-full rounded-md border border-input-border bg-input px-3 py-1 text-sm text-input-foreground shadow-sm transition-colors placeholder:text-muted-foreground focus:border-input-border-accent focus:outline-none focus:ring-2 focus:ring-input-ring disabled:opacity-50 aria-invalid:border-error-300 aria-invalid:text-error-900 aria-invalid:placeholder:text-error-300 aria-invalid:focus:border-error-500 aria-invalid:focus:ring-error-200"
        />

        <Description
          {...descriptionProps}
          isHidden={
            props.validationState === "invalid" ||
            props.isDisabled ||
            props.isReadOnly
          }
          className="mt-2"
        >
          {props.description}
        </Description>

        <ErrorMessage {...errorMessageProps} className="mt-2">
          {props.errorMessage}
        </ErrorMessage>
      </div>
    );
  },
);
