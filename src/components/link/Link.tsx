import { useObjectRef } from "@/hooks";
import { cn } from "@/lib/utils";
import React from "react";
import { AriaLinkOptions, useLink } from "react-aria";

interface LinkProps extends AriaLinkOptions {
  className?: string;
  children?: React.ReactNode;
  href: string;
  target?: React.HTMLAttributeAnchorTarget;
  download?: boolean;
}

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  function Link({ className, ...props }, forwardedRef) {
    const ref = useObjectRef(forwardedRef);
    const { linkProps } = useLink(props, ref);
    return <a {...linkProps} ref={ref} className={cn("", className)} />;
  }
);
