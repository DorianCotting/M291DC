# Données de CineMood

La base [data.json](../data.json), à la racine du dépôt, contient 32 films. Elle alimentera l'application à partir de la semaine 11.

## Structure d'une fiche

| Champ | Type | Obligatoire | Exemple |
|---|---|---|---|
| `id` | entier ≥ 1, unique | oui | `1` |
| `titre` | texte | oui | `"Intouchables"` |
| `annee` | entier | oui | `2011` |
| `realisation` | texte | non | `"Olivier Nakache et Éric Toledano"` |
| `dureeMinutes` | entier entre 1 et 300 | oui | `112` |
| `genres` | liste de textes | oui | `["comédie", "drame"]` |
| `humeurs` | liste fermée | oui | `["fatigue", "triste"]` |
| `contextes` | liste fermée | oui | `["couple", "amis"]` |
| `resume` | texte de 10 à 300 caractères | oui | sans dévoiler la fin |
| `estFrancophone` | booléen | oui | `true` |
| `image` | chemin `images/nom.jpg` | non | `"images/intouchables.jpg"` |

- **Humeurs possibles :** `bonne-humeur`, `fatigue`, `triste`, `frissons`, `romantique`, `reflechir`, `rire`. Ce sont les cartes de l'écran d'accueil.
- **Contextes possibles :** `seul`, `couple`, `amis`, `famille`.
- **Images :** les chemins sont réservés, mais le dossier `images/` n'existe pas encore. Les affiches viendront plus tard (TMDB ou images libres de droits).
- **À vérifier :** les durées viennent de sources générales et peuvent varier de quelques minutes selon la version du film.

## Validation (s10-av1)

[schema.json](schema.json) décrit cette structure en JSON Schema draft-07 : champs obligatoires, types, valeurs minimales et listes fermées pour les humeurs et les contextes.

**Dans VS Code :** le fichier [.vscode/settings.json](../.vscode/settings.json) relie `data.json` au schéma. Une clé mal nommée, un mauvais type ou une humeur inconnue apparaît alors souligné en rouge, avec le message d'erreur au survol.

**Résultat de la vérification (13.11.2026) :** les 32 fiches sont valides. Pour la contre-épreuve, j'ai abîmé volontairement une fiche, et le schéma refuse chacun de ces cas :

| Erreur introduite | Message |
|---|---|
| `duree` au lieu de `dureeMinutes` | champ « dureeMinutes » manquant |
| `"annee": "2011"` (texte) | type string au lieu de integer |
| `"humeurs": ["joyeux"]` | « joyeux » hors liste |
| `"dureeMinutes": -5` | valeur inférieure à 1 |
