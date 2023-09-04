import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
  className?: string;
}

export function ErrorMessage({ className, ...props }: Props) {
  if (!props.children) return null;
  return (
    <span {...props} className={cn("text-sm text-destructive", className)}>
      {props.children}
    </span>
  );
}
