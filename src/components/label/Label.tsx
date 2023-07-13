import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { LabelAriaProps } from "react-aria";

const labelVariants = cva(
  "block text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);

interface LabelProps
  extends LabelAriaProps,
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
    <label {...props} className={cn(labelVariants({ className }))}>
      {children}
      {isRequired && (
        <span className="ml-0.5" aria-hidden={true}>
          *
        </span>
      )}
    </label>
  );
}
