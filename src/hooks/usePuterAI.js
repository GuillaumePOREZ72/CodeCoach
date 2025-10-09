import { useState, useEffect, useCallback } from "react";

export function usePuterAI() {
  const [ready, setReady] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    const waitFor = (cond) =>
      new Promise((resolve) => {
        const id = setInterval(() => {
          if (cond()) {
            clearInterval(id);
            resolve();
          }
        }, 300);
      });

    (async () => {
      try {
        await waitFor(() => !!window.puter);
        // Tente une auth anonyme si disponible (selon le SDK)
        const auth = window.puter?.auth;
        if (auth?.signInAnonymously) {
          try {
            await auth.signInAnonymously();
          } catch {
            // ignore: déjà connecté ou cookies bloqués
          }
        }
        await waitFor(() => !!window.puter?.ai?.chat);
        if (!cancelled) setReady(true);
      } catch (e) {
        if (!cancelled) setError(e);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  const chat = useCallback(async (prompt) => {
    try {
      const res = await window.puter.ai.chat(prompt);
      return typeof res === "string" ? res : res?.message?.content || "";
    } catch (e) {
      if (e?.status === 401 || /401|unauthor/i.test(String(e))) {
        setError(
          new Error(
            "Unauthorized: connectez-vous à puter.com et/ou autorisez les cookies tiers."
          )
        );
      } else {
        setError(e);
      }
      throw e;
    }
  }, []);

  return { ready, chat, error };
}
