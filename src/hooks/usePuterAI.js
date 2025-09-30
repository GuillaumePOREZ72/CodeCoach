import { useState, useEffect, useCallback } from "react";

export function usePuterAI() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      if (window.puter?.ai?.chat) {
        setReady(true);
        clearInterval(id);
      }
    }, 300);
    return () => clearInterval(id);
  }, []);

  const chat = useCallback(async (prompt) => {
    const res = await window.puter.ai.chat(prompt);
    return typeof res === "string" ? res : res?.message?.content || "";
  }, []);

  return { ready, chat };
}
