# User flow — tâche principale

**Tâche :** choisir un film à regarder ce soir, selon son humeur et son temps disponible.

**Début :** la personne ouvre CineMood sur son téléphone, sans compte.  
**Fin réussie :** la personne a retenu un film et voit la confirmation « Bon film ! ».

## Chemin

1. **Écran 1 — Accueil :** Inès découvre la promesse de l'app et touche la carte d'humeur « Fatigué·e ». Elle peut écrire une demande libre, puis elle touche **Trouver un film**. *Feedback : la carte choisie est marquée comme sélectionnée.*
2. **Écran 2 — Filtres et résultats :** elle active les puces « 90-120 min », « Comédie » et « Entre amis », puis touche **Voir mes 3 films**. *Feedback : « Analyse de tes choix… », puis 3 cartes de films.*
3. **Écran 3 — Fiche film :** elle touche une carte et consulte l'affiche, l'année, la durée, le genre, le résumé et la section « Pourquoi ce film ». *Feedback : le lien « Retour aux 3 films » reste visible.*
4. **Écran 3 — Action :** elle touche **J'aime**. *Confirmation immédiate : « Bon film ! Ce choix est noté pour ce soir. »*

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
