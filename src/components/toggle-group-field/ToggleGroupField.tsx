import React from "react";
import { AriaRadioGroupProps, useRadioGroup } from "react-aria";
import { useRadioGroupState } from "react-stately";
import { Label } from "../label";
import { DescriptionMessage } from "../description-message";
import { ErrorMessage } from "../error-message";
import { cn } from "@/lib/utils";
import { ToggleGroupContext } from "./ToggleGroupContext";

interface ToggleGroupFieldProps
  extends Omit<AriaRadioGroupProps, "orientation"> {
  className?: string;
  children: React.ReactElement[];
}

export const ToggleGroupField = React.forwardRef<
  HTMLDivElement,
  ToggleGroupFieldProps
>(({ className, ...props }, forwardedRef) => {
  const isError = props.validationState === "invalid";
  const state = useRadioGroupState(props);
  const { radioGroupProps, labelProps, errorMessageProps, descriptionProps } =
    useRadioGroup({ ...props, orientation: "horizontal" }, state);

  return (
    <div className={className}>
      <Label {...labelProps} isRequired={props.isRequired} className="mb-2">
        {props.label}
      </Label>

      <div
        {...radioGroupProps}
        ref={forwardedRef}
        className={cn(
          "flex h-9 w-full gap-0.5 rounded-md border border-input-border bg-muted p-0.5 text-sm text-muted-foreground shadow-sm",
          isError && "border-error-300 text-error-900",
        )}
      >
        <ToggleGroupContext.Provider
          value={{
            state,
            isError,
            isReadOnly: props.isReadOnly,
            id: radioGroupProps.id,
          }}
        >
          {props.children}
        </ToggleGroupContext.Provider>
      </div>

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
});

ToggleGroupField.displayName = "ToggleGroupField";
