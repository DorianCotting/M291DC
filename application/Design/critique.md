# Critique comparative et arbitrage — CineMood

Les 3 pistes présentent le même écran 2, au même format mobile (390 px) : [Piste A](propositions/piste-a-editoriale.png), [Piste B](propositions/piste-b-chaleureuse.png) et [Piste C](propositions/piste-c-moderne.png).

## Matrice d'évaluation

Notes de 1 (faible) à 5 (excellent), attribuées d'après les captures et les ratios de contraste calculés selon la formule WCAG.

| Critère | Piste A — Éditoriale | Piste B — Chaleureuse | Piste C — Moderne |
| --- | --- | --- | --- |
| Lisibilité | 4 | 4 | 5 |
| Navigation | 3 | 4 | 5 |
| Feedback | 3 | 4 | 4 |
| Cohérence | 5 | 5 | 4 |
| Accessibilité | 4 | 3 | 5 |
| **Total / 25** | **19** | **20** | **23** |

## Contrastes mesurés

| Paire de couleurs | Piste A | Piste B | Piste C |
| --- | --- | --- | --- |
| Texte principal sur le fond | 14,75:1 | 10,51:1 | 19,64:1 |
| Texte secondaire | 6,48:1 | 6,41:1 | 8,74:1 |
| Texte du bouton principal | 14,75:1 | 6,21:1 | 5,39:1 |

Tous les textes dépassent le seuil AA de 4,5:1. Le contour des puces inactives de la Piste B atteint seulement **2,61:1**, sous le seuil de 3:1 demandé pour les composants d'interface.

## Fiche critique — Piste A · Éditoriale

### 2 forces

1. Critère : Lisibilité — preuve : le texte principal atteint 14,75:1 sur le fond blanc chaud.
2. Critère : Cohérence — preuve : l'empattement, le bleu nuit et les angles droits sont utilisés sur tout l'écran.

### 2 faiblesses

1. Critère : Navigation — preuve : le bouton principal et les puces actives ont la même couleur, ce qui hiérarchise moins bien l'action.
2. Critère : Feedback — preuve : seuls le fond sombre et la graisse distinguent une puce active, et le ton formel ne suit pas la promesse d'un choix détendu.

### Verdict

J'**élimine** ce design parce qu'Inès, fatiguée et son téléphone à une main, doit repérer l'action immédiatement.

## Fiche critique — Piste B · Chaleureuse

### 2 forces

1. Critère : Navigation — preuve : le bouton terracotta (6,21:1) se distingue des puces actives vertes.
2. Critère : Cohérence — preuve : les formes arrondies et les teintes sauge et crème correspondent à l'ambiance « vidéoclub de quartier » du brief.

### 2 faiblesses

1. Critère : Accessibilité — preuve : le contour des puces inactives atteint seulement 2,61:1.
2. Critère : Lisibilité — preuve : les contours fins et les fonds crème proches séparent moins nettement les éléments que dans la Piste C.

### Verdict

Je **garde** ce design parce que son ambiance convient à Inès pour choisir un film le soir, à condition de corriger le contour des puces.

## Fiche critique — Piste C · Moderne

### 2 forces

1. Critère : Accessibilité — preuve : le texte principal atteint 19,64:1 et les contours noirs de 2 px délimitent clairement chaque commande.
2. Critère : Navigation — preuve : le rouge est réservé au bouton principal, seul élément de cette couleur à l'écran.

### 2 faiblesses

1. Critère : Cohérence — preuve : le noir et le rouge vif s'éloignent de l'ambiance chaleureuse et détendue demandée dans le brief.
2. Critère : Feedback — preuve : le rouge de l'action se confond avec le rouge réservé à l'attention et aux erreurs dans la palette du brief.

### Verdict

J'**élimine** ce design comme direction principale, mais je **garde** ses contours marqués, car ils aident Inès à viser les puces à une main.

## Arbitrage

La Piste C obtient le meilleur total (23/25), mais nous ne la retenons pas telle quelle : son rouge d'action entre en conflit avec le rouge d'erreur du brief, et son ton ne correspond pas à l'ambiance visée.

**Nous retenons la Piste B pour son adéquation chaleureuse avec une soirée film détendue, en lui intégrant le système de contours contrastés de la Piste C.** Concrètement, les puces inactives et les cartes reçoivent un contour de 2 px en vert très sombre `#2b3a2c`, soit 10,51:1 sur le fond et bien au-delà du seuil de 3:1. Le faible contraste de la Piste B disparaît ainsi, tout en conservant son bouton terracotta et sa palette.

Cette version combinée reste à réaliser en s7-s9 ; elle n'est pas encore représentée dans les captures.
