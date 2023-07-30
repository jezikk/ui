import { mergeProps, mergeRefs, useObjectRef } from "@react-aria/utils";
import { useContext, useMemo } from "react";

export type ContextValue<TProps, TElement> =
  | (TProps & {
      ref: React.RefObject<TElement> | undefined;
    })
  | null;

export function useContextProps<
  TProps extends object,
  TElement extends Element,
  TContext extends ContextValue<TProps, TElement>,
>(
  props: TProps,
  ref: React.ForwardedRef<TElement>,
  context: React.Context<TContext>,
): [TProps, React.RefObject<TElement>] {
  const ctx = useContext<TContext>(context) || { ref: null };
  const { ref: contextRef, ...contextProps } = ctx;

  const mergedRef = useObjectRef(
    useMemo(() => mergeRefs(ref, contextRef ?? null), [ref, contextRef]),
  );
  const mergedProps = mergeProps(contextProps, props) as TProps;

  return [mergedProps, mergedRef];
}
