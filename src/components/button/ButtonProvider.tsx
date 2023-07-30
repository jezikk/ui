import { createContext } from "react";
import { AriaButtonProps } from "react-aria";

type ButtonContextValue = AriaButtonProps & {
  ref: React.RefObject<HTMLButtonElement>;
};

export const ButtonContext = createContext<ButtonContextValue | null>(null);

interface ButtonProviderProps extends ButtonContextValue {
  children?: React.ReactNode;
}

export function ButtonProvider({ children, ...props }: ButtonProviderProps) {
  return (
    <ButtonContext.Provider value={props}>{children}</ButtonContext.Provider>
  );
}
