import { cn } from "@/lib/utils";
import { Text, TextProps } from "react-aria-components";

interface Props extends TextProps {
  children?: React.ReactNode;
  className?: string;
}

export function ErrorMessage({ className, ...props }: Props) {
  if (!props.children) return null;
  return (
    <Text
      slot="errorMessage"
      {...props}
      className={cn("text-sm text-error-600", className)}
    >
      {props.children}
    </Text>
  );
}
