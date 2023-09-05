import React, { LabelHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { useContextProps } from "@/hooks/use-context-props";
import { LabelContext } from "./label-provider";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  className?: string;
  isRequired?: boolean;
  isError?: boolean;
  children?: React.ReactNode;
}

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, children, ...props }, forwardedRef) => {
    const [{ isError, isRequired, label, ...ctxProps }, ref] = useContextProps(
      props,
      forwardedRef,
      LabelContext,
    );
    if (!label && !children) return null;
    return (
      <label
        {...ctxProps}
        ref={ref}
        data-invalid={isError ? true : undefined}
        className={cn(
          "block text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
          className,
        )}
      >
        {children ?? label}
        {isRequired && (
          <span className="ml-0.5 text-destructive" aria-hidden={true}>
            *
          </span>
        )}
      </label>
    );
  },
);

Label.displayName = "Label";
