import { ToggleStateOptions } from "@react-stately/toggle";
import React, { useRef } from "react";
import { useToggleState } from "react-stately";
import {
  useSwitch,
  useFocusRing,
  VisuallyHidden,
  mergeProps,
} from "react-aria";
import { cn } from "@/lib/utils";

interface SwitchFieldProps extends ToggleStateOptions {
  className?: string;
  children?: React.ReactNode;
}

export const SwitchField = React.forwardRef<HTMLDivElement, SwitchFieldProps>(
  ({ className, children, ...props }) => {
    const ref = useRef(null);
    const state = useToggleState(props);
    const { inputProps } = useSwitch(props, state, ref);
    const { isFocusVisible, focusProps } = useFocusRing();
    return (
      <label
        className={cn(
          "inline-flex items-center gap-3 text-sm font-medium leading-none",
          className,
        )}
      >
        <VisuallyHidden>
          <input {...mergeProps(inputProps, focusProps)} ref={ref} />
        </VisuallyHidden>

        <span
          className={cn(
            "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent outline-none transition-colors duration-200 ease-in-out",
            state.isSelected ? "bg-primary" : "bg-input-border",
            isFocusVisible && "ring-2 ring-input-ring",
          )}
        >
          <span
            className={cn(
              state.isSelected ? "translate-x-5" : "translate-x-0",
              "pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",
            )}
          />
        </span>

        {children}
      </label>
    );
  },
);

SwitchField.displayName = "SwitchField";
