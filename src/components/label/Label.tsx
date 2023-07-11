import { cn } from "@/lib/utils";
import { LabelAriaProps } from "react-aria";

interface LabelProps extends LabelAriaProps {
  className?: string;
  isRequired?: boolean;
}

export function Label({ className, label, isRequired, ...props }: LabelProps) {
  if (!label) return null;
  return (
    <label
      {...props}
      className={cn("whitespace-nowrap text-sm font-medium", className)}
    >
      {label}
      {isRequired && (
        <span className="ml-0.5" aria-hidden={true}>
          *
        </span>
      )}
    </label>
  );
}
