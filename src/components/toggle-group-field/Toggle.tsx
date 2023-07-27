import { useObjectRef } from "@react-aria/utils";
import React from "react";
import {
  AriaRadioProps,
  VisuallyHidden,
  useRadio,
  mergeProps,
  useFocusRing,
} from "react-aria";
import { useToggleGroup } from "./ToggleGroupContext";
import { cn } from "@/lib/utils";

interface ToggleProps extends AriaRadioProps {
  className?: string;
}

export const Toggle = React.forwardRef<HTMLInputElement, ToggleProps>(
  ({ className, ...props }, forwardedRef) => {
    const ref = useObjectRef(forwardedRef);
    const { state, isError, isReadOnly } = useToggleGroup();
    const { inputProps, isSelected, isDisabled } = useRadio(props, state, ref);
    const { isFocusVisible, focusProps } = useFocusRing();
    return (
      <label
        className={cn(
          "flex w-full cursor-pointer items-center justify-center rounded-md border border-transparent",
          isSelected &&
            "border-input-border bg-background text-input-foreground shadow-sm",
          isError && isSelected && "border-error-300 text-error-900",
          isDisabled && "cursor-default text-muted-foreground",
          isReadOnly && "cursor-default",
          !isDisabled &&
            !isSelected &&
            !isReadOnly &&
            "hover:bg-muted-foreground/5",
          isFocusVisible &&
            (isError
              ? "ring-2 ring-error-200"
              : "border-input-border-accent ring-2 ring-input-ring"),
          className,
        )}
      >
        <VisuallyHidden>
          <input {...mergeProps(inputProps, focusProps)} ref={ref} />
        </VisuallyHidden>
        {props.children}
      </label>
    );
  },
);

Toggle.displayName = "Toggle";
