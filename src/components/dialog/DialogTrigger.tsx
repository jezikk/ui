import {
  useOverlayTriggerState,
  OverlayTriggerProps as OverlayTriggerState,
} from "react-stately";
import { ButtonProvider } from "../button";
import { ModalProvider } from "../modal";
import { useOverlayTrigger } from "react-aria";
import { DialogProvider } from ".";

interface DialogTriggerProps extends OverlayTriggerState {
  children: React.ReactNode;
}

export function DialogTrigger({ children, ...props }: DialogTriggerProps) {
  const state = useOverlayTriggerState(props);
  const { triggerProps, overlayProps } = useOverlayTrigger(
    { type: "dialog" },
    state,
  );

  return (
    <ButtonProvider {...triggerProps}>
      <ModalProvider state={state}>
        <DialogProvider {...{ ...overlayProps, close: () => state.close() }}>
          {children}
        </DialogProvider>
      </ModalProvider>
    </ButtonProvider>
  );
}
