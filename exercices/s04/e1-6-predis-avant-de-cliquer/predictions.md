# Prédictions — six extraits (e1-6)

Méthode : lire le cadre gris → écrire la prédiction → cliquer **Lancer** → comparer.

| N° | Extrait | Ma prédiction (avant de cliquer) | Résultat réel | Juste ? |
|----|---------|----------------------------------|---------------|---------|
| 1 | Afficher | L'écran va montrer `Bonjour la classe` à la place de `…`. | `Bonjour la classe` | ✅ |
| 2 | Calculer | L'écran va montrer `7` (les boîtes `a` = 4 et `b` = 3 sont des nombres, donc `+` additionne). | `7` | ✅ |
| 3 | Compter | L'écran va montrer `3` (`.length` compte les éléments de la liste : pomme, poire, kiwi). | `3` | ✅ |
| 4 | Condition | L'écran va montrer `suffisant` (5 ≥ 4, donc on passe dans le `if`, pas dans le `else`). | `suffisant` | ✅ |
| 5 | Boucle simple | L'écran va montrer `1 2 3 ` (la boucle tourne 3 fois, i = 1, 2, 3, et ajoute chaque fois le nombre + un espace). | `1 2 3 ` | ✅ |
| 6 | Clic | Le nombre augmente de 1 à chaque clic : 1, puis 2, puis 3… (la boîte `n` est créée **une seule fois** en dehors de la fonction, donc elle garde sa valeur entre les clics). | 1, 2, 3, 4… | ✅ |

**Score : 6 / 6.**

## Ce que j'ai retenu

- Extrait 2 : `+` additionne parce que `a` et `b` sont des **nombres**. Si l'une des boîtes contenait du texte (`"4"`), `+` collerait les deux textes et on verrait `43`.
- Extrait 5 : le résultat se termine par un espace invisible (`"1 2 3 "`), parce qu'on ajoute `" "` aussi après le dernier nombre.
- Extrait 6 : c'est un **événement**. Le code dans `function () { … }` ne tourne pas au chargement de la page, seulement « quand le clic arrive ». Comme `let n = 0;` est à l'extérieur, la boîte n'est pas remise à zéro à chaque clic.
