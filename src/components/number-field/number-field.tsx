import { useContextProps } from "@/hooks/use-context-props";
import { cn } from "@/lib/utils";
import React, { useRef } from "react";
import { AriaNumberFieldProps, useLocale, useNumberField } from "react-aria";
import { NumberFieldStateOptions, useNumberFieldState } from "react-stately";
import { DescriptionProvider } from "../description/description-provider";
import { ErrorMessageProvider } from "../error-message/error-message-provider";
import { FieldFormContext } from "../field-form";
import { InputProvider } from "../input";
import { LabelProvider } from "../label/label-provider";

export interface NumberFieldProps
  extends AriaNumberFieldProps,
    Omit<NumberFieldStateOptions, "locale"> {
  className?: string;
  children: React.ReactNode;
}

export const NumberField = React.forwardRef<HTMLDivElement, NumberFieldProps>(
  ({ children, className, ...props }, forwardedRef) => {
    const inputRef = useRef(null);
    const { locale } = useLocale();

    const [ctxProps, ref] = useContextProps(
      props,
      forwardedRef,
      FieldFormContext,
    );
    const state = useNumberFieldState({ ...ctxProps, locale });
    const { labelProps, inputProps, descriptionProps, errorMessageProps } =
      useNumberField(ctxProps, state, inputRef);

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

NumberField.displayName = "NumberField";
