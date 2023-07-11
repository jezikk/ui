import { useObjectRef } from "@/hooks";
import React from "react";
import { AriaTextFieldProps, useTextField } from "react-aria";
import { Label } from "../label";
import { DescriptionMessage } from "../description-message";
import { ErrorMessage } from "../error-message";

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
