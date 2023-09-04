import { tv, VariantProps } from "tailwind-variants";
import { HTMLAttributes } from "react";

const labelVariants = tv({
  base: "block text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
});

interface LabelProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof labelVariants> {
  className?: string;
  isRequired?: boolean;
  children?: React.ReactNode;
}

export function Label({
  className,
  isRequired,
  children,
  ...props
}: LabelProps) {
  if (!children) return null;
  return (
    <label {...props} className={labelVariants({ className })}>
      {children}
      {isRequired && (
        <span className="ml-0.5 text-destructive" aria-hidden={true}>
          *
        </span>
      )}
    </label>
  );
}
