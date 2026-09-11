# Bug du compteur

Ce que je vois : je clique plusieurs fois sur **+1**, le chiffre à l'écran reste bloqué à `0`. Dans la console (F12), on lit pourtant `n vaut maintenant 1`, `2`, `3`… et aucun message d'erreur rouge.

Ce que j'attendais : que le chiffre à l'écran suive les clics (1, 2, 3…).

La boîte qui change : la variable `n` (en mémoire), dans la fonction du clic : `n = n + 1;`.

Ce qui ne se met pas à jour : l'écran, c'est-à-dire le texte du paragraphe `<p id="affiche">`. Personne ne recopie la valeur de `n` dans `affiche.textContent`.
