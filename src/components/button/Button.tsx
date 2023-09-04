import { tv, VariantProps } from "tailwind-variants";
import React from "react";
import { UnstyledButton, UnstyledButtonProps } from "./button-unstyled";

const buttonVariants = tv({
  base: "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors outline-none data-[focus-visible]:ring-2 data-[focus-visible]:ring-ring disabled:pointer-events-none disabled:opacity-50",
  variants: {
    variant: {
      primary: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
      secondary:
        "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
      destructive:
        "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
      outline:
        "border border-border bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
      ghost: "hover:bg-accent hover:text-accent-foreground",
    },
    size: {
      default: "h-9 px-4 py-2 gap-2",
      sm: "h-8 rounded-md px-3 text-xs gap-1",
      lg: "h-10 rounded-md px-8 gap-2",
      icon: "h-9 w-9",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "default",
  },
});

export interface ButtonProps
  extends UnstyledButtonProps,
    VariantProps<typeof buttonVariants> {
  className?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button({ className, variant, size, ...props }, forwardedRef) {
    return (
      <UnstyledButton
        {...props}
        ref={forwardedRef}
        className={buttonVariants({ variant, size, className })}
      >
        {props.children}
      </UnstyledButton>
    );
  },
);
