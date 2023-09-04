import { AriaDialogProps, mergeProps, useKeyboard } from "react-aria";
import { Dialog } from ".";
import { Heading } from "../heading";
import { Paragraph } from "../paragraph";
import { Button } from "../button";
import { useContextProps } from "@/hooks/use-context-props";
import { ModalContext } from "../modal";
import React from "react";

interface DialogConfirmProps extends AriaDialogProps {
  className?: string;
  title: React.ReactNode;
  description: React.ReactNode;
  confirmButton: React.ReactNode;
  onConfirm?: () => void;
}

export const DialogConfirm = React.forwardRef<
  HTMLDivElement,
  DialogConfirmProps
>(
  (
    { className, title, description, confirmButton, onConfirm, ...props },
    forwardedRef,
  ) => {
    const [{ state }, ref] = useContextProps(props, forwardedRef, ModalContext);

    const { keyboardProps } = useKeyboard({
      onKeyDown: (e) => {
        if (e.key === "Enter") {
          confirm();
        }
        e.continuePropagation();
      },
    });

    const confirm = () => {
      state.close();
      setTimeout(() => {
        onConfirm?.();
      }, 100);
    };

    return (
      <Dialog
        {...mergeProps(props, keyboardProps)}
        ref={ref}
        className={className}
      >
        <Heading as="h2" variant="h3">
          {title}
        </Heading>
        <Paragraph variant="muted">{description}</Paragraph>
        <div className="flex items-center justify-end space-x-3">
          <Button variant="outline" onPress={() => state.close()}>
            Close
          </Button>
          <Button onPress={confirm}>{confirmButton}</Button>
        </div>
      </Dialog>
    );
  },
);

DialogConfirm.displayName = "DialogConfirm";
