// Déclaration de types pour l'API Puter.com

interface PuterAuth {
  signInAnonymously?: () => Promise<void>;
}

interface PuterAI {
  chat: (prompt: string) => Promise<string | { message: { content: string } }>;
}

interface PuterAPI {
  auth?: PuterAuth;
  ai?: PuterAI;
}

// Étendre l'interface Window globale
declare global {
  interface Window {
    puter?: PuterAPI;
  }
}

// Nécessaire pour que TypeScript reconnaisse ce fichier comme un module
export {};
