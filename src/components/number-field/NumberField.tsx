import { useObjectRef } from "@/hooks";
import React from "react";
import { AriaNumberFieldProps, useLocale, useNumberField } from "react-aria";
import { Label } from "../label";
import { DescriptionMessage } from "../description-message";
import { ErrorMessage } from "../error-message";
import { useNumberFieldState } from "react-stately";

interface NumberFieldProps extends AriaNumberFieldProps {
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
        <Label {...labelProps} className="mb-1" />
        <input {...inputProps} ref={ref} />
        <DescriptionMessage {...descriptionProps} className="mt-1">
          {props.description}
        </DescriptionMessage>
        <ErrorMessage {...errorMessageProps} className="mt-1">
          {props.errorMessage}
        </ErrorMessage>
      </div>
    );
  },
);
