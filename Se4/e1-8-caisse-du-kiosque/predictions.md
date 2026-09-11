# Prédictions — la caisse du kiosque (e1-8)

Lecture du script avant de faire les clics. La page est rechargée entre chaque scénario.

| N° | Scénario | Ma prédiction | Pourquoi |
|----|----------|---------------|----------|
| 1 | Un clic sur **Frites** | Total : `06 CHF` (et pas `6 CHF`) | `total` vaut le nombre `0`, mais on lui ajoute le **texte** `"6"`. Nombre + texte = collage de textes : `0` + `"6"` → `"06"`. |
| 2 | **Frites**, puis **Boisson** | Total : `064 CHF` (et pas `10 CHF`) | Même problème : `"06"` + `"4"` → `"064"`. La caisse colle les prix au lieu de les additionner. |
| 3 | **Frites**, puis `PALEO`, puis **Appliquer** | Non, le total reste `06 CHF` et le plateau reste `Frites` | Le script compare avec `"paleo"` en minuscules, et `===` est strict : `"PALEO" === "paleo"` est faux. Le `if` n'est jamais exécuté. La console affiche `code tapé : "PALEO"`. |
| 4 | **Frites**, **Vider le plateau**, **Frites** | Total : `066 CHF` | « Vider » efface le plateau et écrit `0 CHF` **à l'écran**, mais ne remet pas la boîte `total` à 0 (elle vaut toujours `"06"`). Au clic suivant, `montrer()` recopie la vraie boîte : `"06"` + `"6"` → `"066"`. La console le montre : `plateau vidé, total en mémoire : 06`. |

## Les 3 bugs repérés

1. **Texte au lieu de nombre** : `total + "6"` devrait être `total + 6` (et `total + 4` pour la boisson).
2. **Code promo sensible à la casse** : l'affiche dit `PALEO`, le script attend `paleo`. Il faudrait comparer `code.toLowerCase() === "paleo"` (ou `code.trim().toUpperCase() === "PALEO"`).
3. **« Vider » ment** : il change l'écran mais pas la mémoire. Il faudrait `total = 0;` puis `montrer();` au lieu d'écrire `"0 CHF"` à la main. C'est le même bug que le compteur de l'e1-7, à l'envers : ici l'écran change et la boîte non.
