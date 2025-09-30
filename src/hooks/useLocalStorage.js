import { useState, useEffect } from "react";

export function useLocalStorage(key, initialValue, { parse = false } = {}) {
  const [value, setValue] = useState(() => {
    try {
      const raw = window.localStorage.getItem(key);
      if (raw === null) return initialValue;
      return parse ? JSON.parse(raw) : raw;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      if (value === undefined) {
        window.localStorage.removeItem(key);
      } else {
        const raw = parse ? JSON.stringify(value) : String(value);
        window.localStorage.setItem(key, raw);
      }
    } catch {
      // ignore quota/serialization errors
    }
  }, [key, value, parse]);

  return [value, setValue];
}
