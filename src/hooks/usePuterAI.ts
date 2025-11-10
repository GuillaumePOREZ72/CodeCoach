import { useState, useEffect, useCallback } from "react";

export function usePuterAI() {
  const [ready, setReady] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let cancelled = false;

    const waitFor = (cond: () => boolean): Promise<void> =>
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
        if (!cancelled) setError(e instanceof Error ? e : new Error(String(e)));
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  const chat = useCallback(async (prompt: string): Promise<string> => {
    try {
      const res = await window.puter!.ai!.chat(prompt);
      return typeof res === "string" ? res : res?.message?.content || "";
    } catch (e) {
      const errorObj = e instanceof Error ? e : new Error(String(e));

      if ((e as any)?.status === 401 || /401|unauthor/i.test(String(e))) {
        const authError = new Error(
          "Unauthorized: connectez-vous à puter.com et/ou autorisez les cookies tiers."
        );
        setError(authError);
        throw authError;
      } else {
        setError(errorObj);
        throw errorObj;
      }
    }
  }, []);

  return { ready, chat, error };
}
