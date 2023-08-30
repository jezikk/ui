import { useObjectRef } from "@react-aria/utils";
import React from "react";
import {
  AriaRadioProps,
  VisuallyHidden,
  useRadio,
  mergeProps,
  useFocusRing,
} from "react-aria";
import { useToggleGroup } from "./toggle-group-context";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ToggleProps extends AriaRadioProps {}

export const Toggle = React.forwardRef<HTMLInputElement, ToggleProps>(
  (props, forwardedRef) => {
    const ref = useObjectRef(forwardedRef);
    const { state, isError, isReadOnly, id } = useToggleGroup();
    const { inputProps, isSelected, isDisabled } = useRadio(props, state, ref);
    const { isFocusVisible, focusProps } = useFocusRing();

    return (
      <label
        className={cn(
          "relative flex w-full cursor-pointer items-center justify-center rounded-md border border-transparent",
          isSelected && "text-input-foreground",
          isError && isSelected && "text-error-900",
          isDisabled && "cursor-default text-muted-foreground",
          isReadOnly && "cursor-default",
          !isDisabled &&
            !isSelected &&
            !isReadOnly &&
            "hover:bg-muted-foreground/5",
        )}
      >
        <VisuallyHidden>
          <input {...mergeProps(inputProps, focusProps)} ref={ref} />
        </VisuallyHidden>
        <span className="z-10">{props.children}</span>
        {isSelected && (
          <motion.span
            layoutId={id}
            className={cn(
              "absolute inset-0 rounded-md border border-input-border bg-background shadow-sm",
              isError && "border-error-300",
              isFocusVisible &&
                (isError
                  ? "ring-2 ring-error-200"
                  : "border-input-border-accent ring-2 ring-input-ring"),
            )}
          />
        )}
      </label>
    );
  },
);

Toggle.displayName = "Toggle";
