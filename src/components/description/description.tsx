import { useContextProps } from "@/hooks/use-context-props";
import { cn } from "@/lib/utils";
import React, { HTMLAttributes } from "react";
import { DescriptionContext } from "./description-provider";

interface DescriptionProps extends HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
  isHidden?: boolean;
  className?: string;
}

export const Description = React.forwardRef<HTMLSpanElement, DescriptionProps>(
  ({ className, children, ...props }, forwardedRef) => {
    const [{ isHidden, description, ...ctxProps }, ref] = useContextProps(
      props,
      forwardedRef,
      DescriptionContext,
    );
    if (!children && !description) return null;
    return (
      <span
        {...ctxProps}
        ref={ref}
        className={cn(
          "text-sm text-muted-foreground",
          isHidden && "hidden",
          className,
        )}
      >
        {children ?? description}
      </span>
    );
  },
);

Description.displayName = "Description";
