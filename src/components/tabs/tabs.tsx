import { cn } from "@/lib/utils";
import {
  Tabs as RATabs,
  TabsProps as RATabsProps,
  TabList as RATabList,
  TabListProps as RATabListProps,
  Tab as RATab,
  TabProps as RATabProps,
  TabPanel as RATabPanel,
} from "react-aria-components";

interface TabsProps extends RATabsProps {}

export function Tabs(props: TabsProps) {
  return <RATabs {...props} />;
}

interface TabListProps<TItem> extends RATabListProps<TItem> {}

export function TabList<TItem extends object>({
  className,
  ...props
}: TabListProps<TItem>) {
  return <RATabList {...props} className={cn("flex space-x-6", className)} />;
}

interface TabProps extends RATabProps {}

export function Tab({ className, ...props }: TabProps) {
  return (
    <RATab
      {...props}
      className={cn(
        "cursor-pointer rounded-md text-sm font-medium text-muted-foreground outline-none transition-all hover:text-foreground aria-disabled:cursor-default aria-disabled:opacity-50 aria-selected:text-foreground data-[focus-visible]:ring-2 data-[focus-visible]:ring-ring",
        className,
      )}
    />
  );
}

export { RATabPanel as TabPanel };
