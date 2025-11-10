import { useState, useEffect, Dispatch, SetStateAction } from "react";

interface UseLocalStorageOptions {
  parse?: boolean;
}

export function useLocalStorage<T>(
  key: string,
  initialValue: T,
  options: UseLocalStorageOptions = {}
): [T, Dispatch<SetStateAction<T>>] {
  const { parse = false } = options;

  const [value, setValue] = useState<T>(() => {
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
