import { useContextProps } from "@/hooks/useContextProps";
import React, { DOMAttributes } from "react";
import { AriaDialogProps, useDialog } from "react-aria";
import { DialogContext } from ".";
import { HeadingProvider } from "../heading";
import { cn } from "@/lib/utils";

interface DialogProps extends AriaDialogProps {
  className?: string;
  children: React.ReactNode | ((props: DialogChildrenProps) => React.ReactNode);
}

type DialogChildrenProps = {
  close?: () => void;
  titleProps?: DOMAttributes<Element>;
};

export const Dialog = React.forwardRef<HTMLDivElement, DialogProps>(
  ({ className, children, ...props }, forwardedRef) => {
    const [{ close, ...ctxProps }, ref] = useContextProps(
      props,
      forwardedRef,
      DialogContext,
    );
    const { dialogProps, titleProps } = useDialog(ctxProps, ref);

    const content =
      children instanceof Function ? children({ close, titleProps }) : children;

    return (
      <div
        {...dialogProps}
        ref={ref}
        className={cn("space-y-4 outline-none", className)}
      >
        <HeadingProvider {...{ ...titleProps, level: 2 }}>
          {content}
        </HeadingProvider>
      </div>
    );
  },
);
