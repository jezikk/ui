import { useContextProps } from "@/hooks/use-context-props";
import { cn } from "@/lib/utils";
import React, { useRef } from "react";
import { AriaRadioGroupProps, useRadioGroup } from "react-aria";
import { useRadioGroupState } from "react-stately";
import { DescriptionProvider } from "../description/description-provider";
import { ErrorMessageProvider } from "../error-message/error-message-provider";
import { FieldFormContext } from "../field-form";
import { LabelProvider } from "../label/label-provider";
import { ToggleGroupProvider } from "./toggle-group-provider";
import { ToggleProvider } from "./toggle-provider";

export interface ToggleGroupFieldProps
  extends Omit<AriaRadioGroupProps, "orientation"> {
  className?: string;
  children: React.ReactNode;
}

export const ToggleGroupField = React.forwardRef<
  HTMLDivElement,
  ToggleGroupFieldProps
>(({ children, className, ...props }, forwardedRef) => {
  const [ctxProps, ref] = useContextProps(
    props,
    forwardedRef,
    FieldFormContext,
  );
  const radioGroupRef = useRef(null);
  const state = useRadioGroupState(props);
  const { radioGroupProps, labelProps, errorMessageProps, descriptionProps } =
    useRadioGroup({ ...props, orientation: "horizontal" }, state);

  return (
    <LabelProvider
      {...labelProps}
      label={props.label}
      isError={props.validationState === "invalid"}
      isRequired={props.isRequired}
    >
      <ToggleGroupProvider
        {...radioGroupProps}
        isError={props.validationState === "invalid"}
        ref={radioGroupRef}
      >
        <ToggleProvider
          state={state}
          isError={props.validationState === "invalid"}
          isReadOnly={props.isReadOnly}
          id={radioGroupProps.id}
        >
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
        </ToggleProvider>
      </ToggleGroupProvider>
    </LabelProvider>
  );
});

ToggleGroupField.displayName = "ToggleGroupField";
