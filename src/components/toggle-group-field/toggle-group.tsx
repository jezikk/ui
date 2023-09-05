import { useContextProps } from "@/hooks/use-context-props";
import { cn } from "@/lib/utils";
import React from "react";
import { AriaRadioGroupProps } from "react-aria";
import { ToggleGroupContext } from "./toggle-group-provider";

interface ToggleGroupProps extends Omit<AriaRadioGroupProps, "orientation"> {
  className?: string;
  children: React.ReactElement[];
}

export const ToggleGroup = React.forwardRef<HTMLDivElement, ToggleGroupProps>(
  ({ className, ...props }, forwardedRef) => {
    const [{ isError, ...ctxProps }, ref] = useContextProps(
      props,
      forwardedRef,
      ToggleGroupContext,
    );

    return (
      <div
        {...ctxProps}
        ref={ref}
        className={cn(
          "flex h-9 w-full gap-0.5 rounded-md border border-input-border bg-muted p-0.5 text-sm text-muted-foreground shadow-sm",
          isError && "border-error-300 text-error-900",
          className,
        )}
      >
        {props.children}
      </div>
    );
  },
);

ToggleGroup.displayName = "ToggleGroup";
