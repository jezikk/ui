import { useContextProps } from "@/hooks/use-context-props";
import { cn } from "@/lib/utils";
import React, { HTMLAttributes } from "react";
import { ErrorMessageContext } from "./error-message-provider";

interface FieldErrorMessageProps extends HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
  className?: string;
}

export const ErrorMessage = React.forwardRef<
  HTMLSpanElement,
  FieldErrorMessageProps
>(({ className, children, ...props }, forwardedRef) => {
  const [{ errorMessage, ...ctxProps }, ref] = useContextProps(
    props,
    forwardedRef,
    ErrorMessageContext,
  );
  if (!children && !errorMessage) return null;
  return (
    <span
      {...ctxProps}
      ref={ref}
      className={cn("text-sm text-destructive", className)}
    >
      {children ?? errorMessage}
    </span>
  );
});

ErrorMessage.displayName = "ErrorMessage";
