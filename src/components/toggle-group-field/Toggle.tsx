import { useContextProps } from "@/hooks/use-context-props";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";
import {
  AriaRadioProps,
  VisuallyHidden,
  mergeProps,
  useFocusRing,
  useRadio,
} from "react-aria";
import { ToggleContext } from "./toggle-provider";

interface ToggleProps extends AriaRadioProps {}

export const Toggle = React.forwardRef<HTMLInputElement, ToggleProps>(
  (props, forwardedRef) => {
    const [{ state, isError, isReadOnly, id, ...ctxProps }, ref] =
      useContextProps(props, forwardedRef, ToggleContext);
    const { inputProps, isSelected, isDisabled } = useRadio(
      { ...ctxProps, value: ctxProps.value ?? "" },
      state,
      ref,
    );
    const { isFocusVisible, focusProps } = useFocusRing();

    return (
      <label
        className={cn(
          "relative flex w-full cursor-pointer items-center justify-center rounded-md border border-transparent px-2",
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
