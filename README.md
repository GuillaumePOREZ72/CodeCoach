# CodeCoach

Un mini-entraîneur d'entretiens techniques en React qui génère des questions de type LeetCode via Puter AI, propose un éditeur de code intégré avec support multi-langages et donne un retour immédiat sur votre solution.

![Logo](public/square-code.png)

## Aperçu

- Génération de questions aléatoires (niveau: Beginner, Medium, Intermediate)
- Support multi-langages: JavaScript, Python, Java, C++, Go, Rust
- Éditeur de code intégré (CodeMirror + thème Dracula)
- Vérification de la solution via l'IA avec feedback guidé
- Interface moderne et responsive avec Tailwind CSS v4
- Persistance locale des données (questions, code, préférences)
- Expérience locale ultra rapide grâce à Vite

## Stack

- React 19 + Vite 7
- Tailwind CSS 4 via plugin [@tailwindcss/vite](vite.config.js)
- CodeMirror: `@uiw/react-codemirror`, `@codemirror/lang-javascript`, `@codemirror/lang-python`, thème `@uiw/codemirror-theme-dracula`
- Icônes: `lucide-react`
- Puter AI (chargé côté client): voir [index.html](index.html)
- LocalStorage: persistance des données utilisateur

## Démarrage rapide

Prérequis: Node.js ≥ 18

```sh
npm install
npm run dev
```

Par défaut: http://localhost:5173

Build de production:

```sh
npm run build
npm run preview
```

## Structure du projet

- Point d'entrée Vite: [index.html](index.html)
- Entrée React: [src/main.jsx](src/main.jsx)
- Composant principal: [src/App.jsx](src/App.jsx)
- Composants UI:
  - [src/components/ProblemPanel.jsx](src/components/ProblemPanel.jsx): affichage de l'énoncé
  - [src/components/EditorPanel.jsx](src/components/EditorPanel.jsx): éditeur de code
- Hooks personnalisés:
  - [src/hooks/usePuterAI.js](src/hooks/usePuterAI.js): gestion de l'API Puter AI
  - [src/hooks/useLocalStorage.js](src/hooks/useLocalStorage.js): persistance des données
- Utilitaires:
  - [src/utils/constants.js](src/utils/constants.js): constantes (langages, difficultés, prompts, code initial)
- Styles (Tailwind + Fira Code): [src/index.css](src/index.css)
- Config Vite + Tailwind plugin: [vite.config.js](vite.config.js)
- Scripts et dépendances: [package.json](package.json)
- ESLint config: [eslint.config.js](eslint.config.js)
- Assets publics: [public/](public)

## Fonctionnement

- **Chargement de Puter AI**: le script CDN est inclus dans [index.html](index.html). L'app attend que `window.puter.ai.chat` soit disponible avant d'activer les actions.
- **Sélection du langage**: l'utilisateur choisit parmi JavaScript, Python, Java, C++, Go ou Rust via l'interface.
- **Génération d'énoncé**: la fonction [`generateQuestion`](src/App.jsx) demande à l'IA un JSON strict contenant `language`, `problem`, `example`, `constraints`, `note` dans le langage sélectionné.
- **Rédaction de la solution**: éditeur CodeMirror dans [`EditorPanel`](src/components/EditorPanel.jsx) avec coloration syntaxique adaptée au langage choisi.
- **Vérification**: [`checkSolution`](src/App.jsx) envoie votre code, l'énoncé et le langage à l'IA qui répond par un feedback concis (sans révéler la solution complète).
- **Persistance**: toutes les données (question, code, langage, difficulté, feedback) sont sauvegardées dans le localStorage.

## Langages supportés

| Langage    | Extension CodeMirror          | Code initial                |
| ---------- | ----------------------------- | --------------------------- |
| JavaScript | `@codemirror/lang-javascript` | `function solution() {...}` |
| Python     | `@codemirror/lang-python`     | `def solution(): ...`       |
| Java       | `@codemirror/lang-java`       | `public class Solution...`  |
| C++        | `@codemirror/lang-cpp`        | `void solution() {...}`     |
| Go         | (custom)                      | `func solution() {...}`     |
| Rust       | `@codemirror/lang-rust`       | `fn solution() {...}`       |

## Scripts NPM

- `npm run dev`: démarre le serveur de dev Vite
- `npm run build`: build de production
- `npm run preview`: prévisualisation locale du build
- `npm run lint`: règles ESLint (voir [eslint.config.js](eslint.config.js))

## Personnalisation

- **Thème/Styles**: modifiez [src/index.css](src/index.css)
- **UI/Logique**: adaptez les handlers dans [src/App.jsx](src/App.jsx) (`generateQuestion`, `checkSolution`, gestion des niveaux, états de chargement/erreurs)
- **Nouveaux langages**: ajoutez-les dans [src/utils/constants.js](src/utils/constants.js) (`LANGUAGES`, `INITIAL_CODE`) et installez les extensions CodeMirror nécessaires
- **Prompts IA**: personnalisez les prompts dans [src/utils/constants.js](src/utils/constants.js)
- **Extensions éditeur**: configurez CodeMirror dans [`EditorPanel`](src/components/EditorPanel.jsx)

## Responsive Design

L'interface est optimisée pour tous les écrans:

- **Mobile**: boutons compacts, textes réduits, layout vertical
- **Tablette**: affichage adapatif avec breakpoints `sm:`
- **Desktop**: layout en grille, éditeur côte à côte avec l'énoncé

## Notes et limitations

- Connexion Internet requise (script Puter AI via CDN)
- Les réponses IA doivent être un JSON valide pour l'énoncé; en cas d'erreur de parsing, un message est affiché
- Les niveaux disponibles sont: Beginner, Medium, Intermediate
- La vérification du code est basée sur l'analyse de l'IA, pas sur une exécution réelle
- Les données sont stockées localement dans le navigateur (localStorage)

## Licence

Ce projet est fourni tel quel pour usage éducatif/démo. Adaptez la licence selon vos besoins.
