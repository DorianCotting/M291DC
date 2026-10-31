# Brief de Conception — CineMood

## Pitch

CineMood recommande 3 films selon l'humeur, le temps disponible et les préférences du moment. L'application s'adresse aux jeunes de Suisse romande qui veulent choisir rapidement un film le soir, depuis leur téléphone.

## 1. Contexte & Problématique

Le soir, de nombreux jeunes de Suisse romande passent beaucoup de temps à parcourir des catalogues sans parvenir à choisir. Ces catalogues classent les films par genre, sans tenir compte de l'humeur, du temps restant ni des personnes présentes. CineMood transforme ces informations en 3 propositions expliquées par une IA, sans compte obligatoire.

## 2. Profil de l'Utilisateur Cible (Persona)

- **Prénom & Âge :** Inès, 19 ans, apprentie informaticienne CFC à Lausanne
- **Contexte d'utilisation :** le soir sur le canapé, smartphone de 390 px tenu à une main
- **Besoins clés :** rapidité, durée visible, contrastes nets, raison du choix expliquée

Profil complet : [design/persona.md](design/persona.md) · Parcours : [design/user-flow.md](design/user-flow.md)

## 3. Fonctionnalités Essentielles (Périmètre MVP)

1. Affichage des humeurs sous forme de cartes, puis des 3 films recommandés sous forme de cartes.
2. Filtrage par puces (durée, 1 à 3 genres, contexte) et demande libre facultative.
3. Consultation d'une fiche détaillée avec les actions J'aime, Pas pour moi et Autre proposition.
4. Appel à une API d'IA qui renvoie 3 films dans un format JSON, sans répéter les films refusés.

**Hors MVP (si le temps le permet) :** affiches et métadonnées via TMDB, favoris, historique, comptes.

## Écrans

- Écran 1 : Accueil et humeur
- Écran 2 : Filtres et résultats
- Écran 3 : Fiche film

## Contenu de chaque écran

### Écran 1 — Accueil et humeur

- On y voit : le nom de l'app, sa promesse, le champ « Quelque chose de particulier ? » et les cartes d'humeur.
- On peut y faire : choisir une humeur et écrire une demande libre.
- Bouton principal : Trouver un film

### Écran 2 — Filtres et résultats

- On y voit : les puces de durée, de genre et de contexte, puis les 3 cartes de films avec leur justification.
- On peut y faire : modifier les filtres, ouvrir une fiche ou demander d'autres films.
- Bouton principal : Voir mes 3 films

### Écran 3 — Fiche film

- On y voit : l'affiche, le titre, l'année, la durée, le genre, le résumé et « Pourquoi ce film ».
- On peut y faire : aimer ou refuser le film, demander une autre proposition, revenir à la liste.
- Bouton principal : J'aime

## Charte éditoriale & Ambiance visuelle

Chaleureuse, claire et détendue : comme un petit vidéoclub de quartier où l'on vous conseille un film. Le ton tutoie, reste simple et n'utilise pas de jargon technique.

## Palette

- Fond : crème chaud
- Texte : vert très sombre
- Accent : terracotta foncé
- Attention / erreur : rouge brique

(Couleurs en mots pour l'instant ; hex en s7-s9. Direction retenue : [design/critique.md](design/critique.md).)

## 4. Contraintes Techniques & Ergonomiques

- **Approche :** Mobile First (largeur de référence 390 px), cibles tactiles d'au moins 48 px.
- **Technologie :** Vanilla HTML5 sémantique, CSS moderne avec variables, JavaScript natif sans bibliothèque.
- **Accessibilité :** ratios de contraste WCAG AA (≥ 4,5:1), navigation clavier assurée.
- **IA :** la clé d'API reste côté serveur (fonction Vercel ou Netlify) et n'apparaît jamais dans le code du navigateur.
- **Données :** pas de base de données pour le MVP.

## Interdits

- pas de Bootstrap, pas de React, pas de compte obligatoire pour consulter
- pas de publicité ni de pop-up à l'ouverture
- pas de film inventé présenté comme réel : les titres renvoyés par l'IA doivent être vérifiés avant la démonstration
