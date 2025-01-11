import { useCallback, useRef } from "react";

export default function useObserver(cb, deps) {
  const observer = useRef(null);
  const ref = useCallback(
    (node) => {
      if (deps.every(Boolean)) {
        observer.current?.disconnect();
        observer.current = new IntersectionObserver((entries) => {
          if (entries[0].isIntersecting) cb();
        });
        if (node) observer.current.observe(node);
      }
    },
    [deps, cb]
  );
  return ref;
}
