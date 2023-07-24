import { cn } from "@/lib/utils";
import {
  Item as RAItem,
  ItemProps as RAItemProps,
} from "react-aria-components";

interface SelectItemProps extends RAItemProps {
  className?: string;
}

export function SelectItem(props: SelectItemProps) {
  return (
    <RAItem
      {...props}
      className={({ isSelected, isFocused }) =>
        cn(
          "flex items-center justify-between gap-x-2 rounded-md px-2 py-1.5 text-sm outline-none",
          isSelected && "font-semibold",
          isFocused && "bg-accent text-accent-foreground",
        )
      }
    />
  );
}
