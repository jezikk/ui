import { useContextProps } from "@/hooks/use-context-props";
import { cn } from "@/lib/utils";
import React, { InputHTMLAttributes } from "react";
import { InputContext } from ".";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, forwardedRef) => {
    const [ctxProps, ref] = useContextProps(props, forwardedRef, InputContext);
    return (
      <input
        {...ctxProps}
        ref={ref}
        className={cn(
          "flex h-9 w-full rounded-md border border-input-border bg-input px-3 py-1 text-sm text-input-foreground shadow-sm transition-colors placeholder:text-muted-foreground focus:border-input-border-accent focus:outline-none focus:ring-2 focus:ring-input-ring disabled:opacity-50 aria-invalid:border-error-300 aria-invalid:text-error-900 aria-invalid:placeholder:text-error-300 aria-invalid:focus:border-error-500 aria-invalid:focus:ring-error-200",
          className,
        )}
      />
    );
  },
);

Input.displayName = "Input";
