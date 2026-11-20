# Grille de roast — e2-1

**Nom :** Dorian Cotting  
**Date :** 20.11.2026  
**Barème :** 1 = cassé · 3 = moyen · 5 = ça va

Les notes s'appuient sur le code HTML et CSS des 4 pages (`captures/01` à `04`). Les ratios de contraste sont calculés avec la formule WCAG (seuil AA : 4,5:1 pour le texte courant).

| Capture | Lisibilité | Navigation | Feedback | Cohérence | Accessibilité | Phrases précises |
|---|---|---|---|---|---|---|
| 01 mur de texte | 1 | 2 | 2 | 2 | 1 | Le titre, le sous-titre, le texte et les liens ont tous la même taille (11 px) et la même graisse, donc rien n'indique par où commencer. Le texte gris `#888` sur blanc n'atteint que 3,54:1, sous le seuil de 4,5:1. |
| 02 labyrinthe | 3 | 1 | 2 | 2 | 2 | Pour continuer, il faut traverser 6 niveaux de menu (« Menu > Espace > Plus > Options > Avancé > Liste »), et le bouton principal n'existe pas sur la page. Le lien « Aide? » est placé à 70 % de la largeur, loin du contenu décalé à 40 %, donc l'œil ne trouve aucun alignement. |
| 03 silence | 3 | 3 | 1 | 3 | 1 | Le bouton « ok » ne fait rien au clic et n'affiche aucun message, donc on ne sait pas si le compte est créé. Son texte `#ddd` sur fond `#ddd` (1:1) est invisible, et la mention légale en `#ccc` sur blanc n'atteint que 1,61:1. |
| 04 carnaval | 1 | 2 | 2 | 1 | 1 | Le texte vert `#0f0` sur fond jaune `#ff0` n'atteint que 1,28:1, et la page mélange 5 polices (Comic Sans, Impact, Georgia, Courier, cursive). Seule la couleur distingue les articles en promotion (rouge) des articles normaux (vert), ce qui exclut les personnes daltoniennes. |

## La pire, pour la présentation

**Capture n° 3 (silence)**, parce que la seule tâche de la page, créer un compte, est impossible. Le bouton est invisible (contraste 1:1) et, quand on le trouve, il ne réagit pas. Les trois autres pages sont pénibles, mais on peut encore y lire ou y cliquer quelque chose ; ici, l'utilisateur ne sait même pas s'il a échoué.

## Détail des points qui comptent

- **01 :** la navigation mélange l'anglais (« Home », « Cart ») et le français du contenu ; le lien « Cliquez ici ici ici ici » ne dit pas où il mène.
- **02 :** les liens « menu · espace · plus » sont en minuscules, sans indication de la page actuelle.
- **03 :** les champs « Email » et « Mot de passe » n'ont pas de `<label>` relié, donc un lecteur d'écran ne les annonce pas.
- **04 :** les boutons « CLICK » et « BUY » sont en jaune sur magenta (2,92:1) et en 11 px ; « CLICK » et « info » ne disent pas ce qu'ils font.

## Une correction mesurable par capture

| Capture | Correction mesurable |
|---|---|
| 01 mur de texte | Le titre passe à 28 px en gras, les sous-titres à 20 px, et le texte à 16 px en `#333` (12,63:1 sur blanc). |
| 02 labyrinthe | Un bouton principal « Voir la liste » de 48 px de haut apparaît directement sous « Bienvenue », et le chemin passe de 6 niveaux à 1 clic. |
| 03 silence | Le bouton passe en texte blanc sur `#1d4ed8` (6,7:1), et au clic il affiche « Compte créé » pendant 3 secondes, ou un message d'erreur sous le champ concerné. |
| 04 carnaval | Une seule police pour le texte et une pour les titres ; le texte passe en noir sur blanc (21:1), et les articles en promotion reçoivent le mot « Promo » en plus de la couleur. |
