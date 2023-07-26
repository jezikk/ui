import { tv, VariantProps } from "tailwind-variants";
import {
  Label as RALabel,
  LabelProps as RALabelProps,
} from "react-aria-components";

const labelVariants = tv({
  base: "block text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
});

interface LabelProps extends RALabelProps, VariantProps<typeof labelVariants> {
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
    <RALabel {...props} className={labelVariants({ className })}>
      {children}
      {isRequired && (
        <span className="ml-0.5 text-error-600" aria-hidden={true}>
          *
        </span>
      )}
    </RALabel>
  );
}
