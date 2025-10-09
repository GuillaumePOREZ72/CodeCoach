import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import { java } from "@codemirror/lang-java";
import { cpp } from "@codemirror/lang-cpp";
import { rust } from "@codemirror/lang-rust";

/**
 * Retourne l'extension CodeMirror correspondant au langage
 */

export function getLanguageExtension(language) {
  switch (language) {
    case "JavaScript":
      return javascript();
    case "Python":
      return python();
    case "Java":
      return java();
    case "C++":
      return cpp();
    case "Rust":
      return rust();
    case "Go":
      // Go n'a pas d'extension officielle, on utilise JavaScript comme fallback
      return javascript();
    default:
      return javascript();
  }
}
