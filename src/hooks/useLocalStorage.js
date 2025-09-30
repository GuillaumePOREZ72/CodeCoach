import { useState, useCallback } from "react";

export function useLocalStorage(key, initialValue, { parse = true } = {}) {
  const read = () => {
    try {
      const raw = window.localStorage.getItem(key);
      if (raw === null) return initialValue;
      return parse ? JSON.parse(raw) : raw;
    } catch {
      return initialValue;
    }
  };

  const [state, setState] = useState(() => read());

  const set = useCallback(
    (updater) => {
      setState((prev) => {
        const value = typeof updater === "function" ? updater(prev) : updater;
        try {
          if (value === undefined) window.localStorage.removeItem(key);
          else
            window.localStorage.setItem(
              key,
              parse ? JSON.stringify(value) : String(value)
            );
        } catch {
          return value;
        }
      });
    },
    [key, parse]
  );

  const remove = useCallback(() => {
    try {
      window.localStorage.removeItem(key);
    } catch {
      console.log("error");
    }
    setState(initialValue);
  }, [key, initialValue]);

  return [state, set, remove];
}
