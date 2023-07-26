import { useObjectRef } from "@react-aria/utils";
import React from "react";
import { AriaLinkOptions, useLink } from "react-aria";
import { tv } from "tailwind-variants";

const linkVariants = tv({
  base: "font-medium text-primary underline underline-offset-4 transition-colors hover:cursor-pointer hover:text-primary/90",
});

interface LinkProps extends AriaLinkOptions {
  className?: string;
  children?: React.ReactNode;
  href: string;
  target?: React.HTMLAttributeAnchorTarget;
  download?: boolean;
}

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  function Link({ className, children, ...props }, forwardedRef) {
    const ref = useObjectRef(forwardedRef);
    const { linkProps } = useLink(props, ref);
    return (
      <a
        {...linkProps}
        ref={ref}
        className={linkVariants({ className })}
        children={children}
      />
    );
  },
);
