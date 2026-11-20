# M291 Dorian Cotting

Module 291 — Développer des interfaces utilisateurs (UI).

Projet de l'année : **CineMood**, une application web qui recommande 3 films selon l'humeur, le temps disponible et les préférences du moment. Le [brief](brief.md) décrit le projet.

## Site en ligne (GitHub Pages)

- Application : https://doriancotting.github.io/M291DC/
- Maquette cliquable : https://doriancotting.github.io/M291DC/application/Design/maquette/

Publication : branche `main`, dossier racine. Chaque push sur `main` met le site à jour.

**Test en direct du 20.11.2026, sur la version en ligne :**

| Vérification | Résultat |
|---|---|
| L'accueil s'ouvre, avec ses styles et ses 7 cartes d'humeur | Réussi |
| `style.css`, `js/app.js` et `data.json` se chargent (code 200) | Réussi |
| `data.json` se lit sans erreur dans le navigateur (32 films) | Réussi |
| Pas de défilement horizontal | Réussi |
| Maquette de bout en bout : humeur « Fatigué·e » → genre « Comédie » → 3 films → fiche → « J'aime » → confirmation | Réussi |

## Organisation du dépôt

| Dossier ou fichier | Contenu |
|---|---|
| [index.html](index.html), [style.css](style.css), [js/app.js](js/app.js) | L'application CineMood (écran d'accueil) |
| [data.json](data.json), [data/](data/) | Base de 32 films, schéma de validation et documentation |
| [brief.md](brief.md) | Brief de conception de CineMood |
| [application/Design](application/Design/) | Pitch, persona, user flow, wireframes, propositions de design, critique, tests utilisateurs et maquette |
| [exercices](exercices/) | Exercices du cours, un dossier par semaine |
| [kit-ia.md](kit-ia.md) | Mes outils d'IA et leurs quotas |

## Dossier de design

- [Pitch](application/Design/pitch.md) · [Persona](application/Design/persona.md) · [User flow](application/Design/user-flow.md)
- [Wireframes](application/Design/wireframes/)
- [Propositions de design](application/Design/propositions/) · [Critique](application/Design/critique.md)
- [Tests utilisateurs et audit d'accessibilité](application/Design/tests-utilisateurs.md) · [Maquette](application/Design/maquette/index.html)

## Exercices

| Semaine | Thème |
|---|---|
| [s04](exercices/s04/) | Lire du code avant de cliquer |
| [s07](exercices/s07/) | Concevoir CineMood |
| [s08](exercices/s08/) | Accessibilité et tests utilisateurs |
| [s09](exercices/s09/) | Intégrer la maquette en vrai |
| [s10](exercices/s10/) | Ma base de données JSON |
