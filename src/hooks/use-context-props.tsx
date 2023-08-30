import { mergeProps, mergeRefs, useObjectRef } from "@react-aria/utils";
import { useContext, useMemo } from "react";

export type ContextValue<TProps, TElement> =
  | null
  | (TProps & {
      ref?: React.ForwardedRef<TElement>;
    });

export function useContextProps<
  TProps extends object | undefined,
  TElement extends Element,
  TContext extends ContextValue<unknown, TElement>,
>(
  props: TProps,
  ref: React.ForwardedRef<TElement>,
  context: React.Context<TContext>,
): [Omit<NonNullable<TContext>, "ref">, React.MutableRefObject<TElement>] {
  const ctx = useContext<TContext>(context) || { ref: null };
  const { ref: contextRef, ...contextProps } = ctx;

  const mergedRef = useObjectRef(
    useMemo(() => mergeRefs(ref, contextRef ?? null), [ref, contextRef]),
  );
  const mergedProps = mergeProps(contextProps, props) as Omit<
    NonNullable<TContext>,
    "ref"
  >;

  return [mergedProps, mergedRef];
}
