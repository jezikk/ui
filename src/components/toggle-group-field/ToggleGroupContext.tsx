import React, { useContext } from "react";
import { RadioGroupState } from "react-stately";

type ToggleGroupContextState = {
  state: RadioGroupState;
  isError?: boolean;
  isReadOnly?: boolean;
};

export const ToggleGroupContext =
  React.createContext<ToggleGroupContextState | null>(null);

export const useToggleGroup = () => {
  const state = useContext(ToggleGroupContext);

  if (!state) {
    throw new Error("useToggleGroup must be used within ToggleGroupContext");
  }
  return state;
};
