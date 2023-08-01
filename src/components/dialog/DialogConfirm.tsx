import { AriaDialogProps, mergeProps, useKeyboard } from "react-aria";
import { Dialog } from ".";
import { Heading } from "../heading";
import { Paragraph } from "../paragraph";
import { Button } from "../button";
import { useContextProps } from "@/hooks/useContextProps";
import { ModalContext } from "../modal";

interface DialogConfirmProps extends AriaDialogProps {
  className?: string;
  title: React.ReactNode;
  description: React.ReactNode;
  confirmButton: React.ReactNode;
  onConfirm?: () => void;
}

export function DialogConfirm({
  className,
  title,
  description,
  confirmButton,
  onConfirm,
  ...props
}: DialogConfirmProps) {
  const [{ state }] = useContextProps(props, null, ModalContext);

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
    <Dialog {...mergeProps(props, keyboardProps)} className={className}>
      <Heading as="h2" variant="h3">
        {title}
      </Heading>
      <Paragraph variant="muted">{description}</Paragraph>
      <div className="flex items-center justify-end space-x-3">
        <Button variant="outline" onPress={() => state.close()}>
          Close
        </Button>
        <Button variant="default" onPress={confirm}>
          {confirmButton}
        </Button>
      </div>
    </Dialog>
  );
}
