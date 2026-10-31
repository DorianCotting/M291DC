# User flow — tâche principale

**Tâche :** choisir un film à regarder ce soir, selon son humeur et son temps disponible.

**Début :** la personne ouvre CineMood sur son téléphone, sans compte.  
**Fin réussie :** la personne a retenu un film et voit la confirmation « Bon film ! ».

## Chemin

| Étape | Écran traversé | Action de l'utilisatrice | Feedback attendu |
| --- | --- | --- | --- |
| 1 | Écran 1 — Accueil | Inès lit la promesse de l'app et touche la carte d'humeur « Fatigué·e ». | La carte passe à l'état sélectionné, avec une coche. |
| 2 | Écran 1 — Accueil | Elle écrit éventuellement une demande libre, puis touche **Trouver un film**. | L'écran 2 s'ouvre et rappelle « Humeur : Fatigué·e ». |
| 3 | Écran 2 — Filtres et résultats | Elle active les puces « 90-120 min », « Comédie » et « Entre amis ». | Chaque puce active change de couleur et affiche une coche. |
| 4 | Écran 2 — Filtres et résultats | Elle touche **Voir mes 3 films**. | Le message « Analyse de tes choix… » s'affiche, puis 3 cartes de films apparaissent. |
| 5 | Écran 3 — Fiche film | Elle touche une carte, puis lit le résumé et la section « Pourquoi ce film ». | La fiche s'ouvre et le lien « Retour aux 3 films » reste visible. |
| 6 | Écran 3 — Fiche film | Elle touche **J'aime**. | La confirmation s'affiche : « Bon film ! Ce choix est noté pour ce soir. » |

## Variantes

- **Pas pour moi :** le film est retiré de la liste et ne sera plus proposé pendant la session.
- **Autre proposition :** l'IA propose d'autres films, sans répéter ceux qui ont déjà été refusés.

## Variante d'échec

Si l'IA ne répond pas, l'écran 2 dit : « Impossible d'obtenir des films pour l'instant. Tes choix sont conservés. » Le bouton **Réessayer** relance la demande sans refaire le formulaire.

## Enchaînement

```text
Accueil + humeur → Filtres → Analyse IA → 3 films → Fiche film → J'aime + confirmation
                                             ↑                        |
                                             └── Pas pour moi / Autre proposition
```
