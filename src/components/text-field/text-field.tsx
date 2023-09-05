import { useContextProps } from "@/hooks/use-context-props";
import { cn } from "@/lib/utils";
import React, { useRef } from "react";
import { AriaTextFieldProps, useTextField } from "react-aria";
import { DescriptionProvider } from "../description/description-provider";
import { ErrorMessageProvider } from "../error-message/error-message-provider";
import { FieldFormContext } from "../field-form";
import { InputProvider } from "../input";
import { LabelProvider } from "../label/label-provider";

export interface TextFieldProps extends AriaTextFieldProps {
  className?: string;
  children: React.ReactNode;
}

export const TextField = React.forwardRef<HTMLDivElement, TextFieldProps>(
  ({ children, className, ...props }, forwardedRef) => {
    const [ctxProps, ref] = useContextProps(
      props,
      forwardedRef,
      FieldFormContext,
    );
    const inputRef = useRef(null);
    const { labelProps, inputProps, descriptionProps, errorMessageProps } =
      useTextField({ ...ctxProps, inputElementType: "input" }, inputRef);

    return (
      <LabelProvider
        {...labelProps}
        label={props.label}
        isError={props.validationState === "invalid"}
        isRequired={props.isRequired}
      >
        <InputProvider {...inputProps} ref={inputRef}>
          <DescriptionProvider
            {...descriptionProps}
            description={props.description}
            isHidden={
              props.validationState === "invalid" ||
              props.isDisabled ||
              props.isReadOnly
            }
          >
            <ErrorMessageProvider
              {...errorMessageProps}
              errorMessage={ctxProps.errorMessage}
            >
              <div className={cn("flex flex-col gap-2", className)} ref={ref}>
                {children}
              </div>
            </ErrorMessageProvider>
          </DescriptionProvider>
        </InputProvider>
      </LabelProvider>
    );
  },
);

TextField.displayName = "TextField";
