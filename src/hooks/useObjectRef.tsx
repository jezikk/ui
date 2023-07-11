import { useImperativeHandle, useRef } from "react";

export function useObjectRef<T>(forwardedRef: React.ForwardedRef<T>) {
  const ref = useRef<T>(null);
  useImperativeHandle(forwardedRef, () => {
    if (ref.current === null) {
      throw new Error(
        "useObjectRef should only be used when ref is certainly defined"
      );
    }
    return ref.current;
  });
  return ref;
}
