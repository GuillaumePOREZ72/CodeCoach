# CodeCoach

Un mini-entraîneur d’entretiens techniques en React qui génère des questions de type LeetCode via Puter AI, propose un éditeur de code intégré et donne un retour immédiat sur votre solution.

![Logo](public/square-code.png)

## Aperçu

- Génération de questions aléatoires (niveau: Beginner, Medium, Intermediate)
- Éditeur de code intégré (CodeMirror + thème Dracula)
- Vérification de la solution via l’IA avec feedback guidé
- Interface moderne avec Tailwind CSS v4
- Expérience locale ultra rapide grâce à Vite

## Stack

- React 19 + Vite 7
- Tailwind CSS 4 via plugin [@tailwindcss/vite](vite.config.js)
- CodeMirror: `@uiw/react-codemirror`, `@codemirror/lang-javascript`, thème `@uiw/codemirror-theme-dracula`
- Icônes: `lucide-react`
- Puter AI (chargé côté client): voir [index.html](index.html)

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

- Point d’entrée Vite: [index.html](index.html)
- Entrée React: [src/main.jsx](src/main.jsx)
- Composant principal: [src/App.jsx](src/App.jsx)
- Styles (Tailwind + Fira Code): [src/index.css](src/index.css)
- Config Vite + Tailwind plugin: [vite.config.js](vite.config.js)
- Scripts et dépendances: [package.json](package.json)
- ESLint config: [eslint.config.js](eslint.config.js)
- Assets publics: [public/](public)

## Fonctionnement

- Chargement de Puter AI: le script CDN est inclus dans [index.html](index.html). L’app attend que `window.puter.ai.chat` soit disponible avant d’activer les actions.
- Génération d’énoncé: la fonction [`generateQuestion`](src/App.jsx) demande à l’IA un JSON strict contenant `problem`, `example`, `constraints`, `note`.
- Rédaction de la solution: éditeur CodeMirror dans [`App`](src/App.jsx) avec JavaScript.
- Vérification: [`checkSolution`](src/App.jsx) envoie votre code et l’énoncé à l’IA qui répond par un feedback concis (sans révéler la solution complète).

## Scripts NPM

- `npm run dev`: démarre le serveur de dev Vite
- `npm run build`: build de production
- `npm run preview`: prévisualisation locale du build
- `npm run lint`: règles ESLint (voir [eslint.config.js](eslint.config.js))

## Personnalisation

- Thème/Styles: modifiez [src/index.css](src/index.css)
- UI/Logique: adaptez les handlers dans [src/App.jsx](src/App.jsx) (`generateQuestion`, `checkSolution`, gestion des niveaux, états de chargement/erreurs)
- Extensions éditeur: configurez CodeMirror dans [`App`](src/App.jsx)

## Notes et limitations

- Connexion Internet requise (script Puter AI via CDN).
- Les réponses IA doivent être un JSON valide pour l’énoncé; en cas d’erreur de parsing, un message est affiché.
- Les niveaux disponibles sont: Beginner, Medium, Intermediate.

## Licence

Ce projet est fourni tel quel pour usage éducatif/démo. Adaptez la licence selon vos besoins.
