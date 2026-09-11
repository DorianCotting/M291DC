# Bug du compteur

Ce que je vois : je clique plusieurs fois sur **+1**, le chiffre à l'écran reste bloqué à `0`. Dans la console (F12), on lit pourtant `n vaut maintenant 1`, `2`, `3`… et aucun message d'erreur rouge.

Ce que j'attendais : que le chiffre à l'écran suive les clics (1, 2, 3…).

La boîte qui change : la variable `n` (en mémoire), dans la fonction du clic : `n = n + 1;`.

Ce qui ne se met pas à jour : l'écran, c'est-à-dire le texte du paragraphe `<p id="affiche">`. Personne ne recopie la valeur de `n` dans `affiche.textContent`.

## Correction

Ligne ajoutée dans la fonction du clic, juste après `n = n + 1;` :

```js
document.getElementById("affiche").textContent = n;
```

## Explication (comme à un camarade)

Il y a deux mondes : la **mémoire** (la boîte `n`) et l'**écran** (le `<p id="affiche">` que le navigateur dessine). Le code de l'IA changeait bien la boîte à chaque clic — la console le prouvait — mais rien ne recopiait la boîte vers l'écran. Le navigateur ne le fait pas tout seul : le `0` écrit dans le HTML restait donc affiché, comme une ardoise avec le prix d'hier.

La ligne ajoutée va chercher le paragraphe `affiche` dans la page (le DOM) et remplace son texte par la valeur actuelle de `n`. Comme elle est dans la fonction du clic, elle s'exécute à chaque clic, juste après que `n` a changé : la boîte et l'écran restent synchronisés.

Il n'y avait pas d'erreur rouge dans la console : le code « marchait », il oubliait juste une étape. C'est pour ça qu'il faut lire le code, pas seulement faire confiance à « ça marche ».
