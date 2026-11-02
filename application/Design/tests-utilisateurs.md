# Tests utilisateurs et audit d'accessibilité — CineMood

**Maquette testée :** [maquette/index.html](maquette/index.html) (double-clic pour l'ouvrir, à afficher en largeur mobile)  
**Direction :** Piste B avec les contours contrastés de la Piste C ([critique.md](critique.md))  
**Limite :** les films sont des exemples fixes ; l'IA n'est pas encore branchée.

## 1. Audit d'accessibilité

Audit réalisé le 31.10.2026 dans le navigateur intégré à l'app Claude, en largeur 375 px. Les ratios sont calculés avec la formule WCAG à partir des couleurs affichées.

### Contrastes des textes

Seuil WCAG AA : 4,5:1 pour le texte courant, 3:1 pour le grand texte.

| Élément | Couleurs | Ratio mesuré | Résultat |
| --- | --- | --- | --- |
| **Bouton principal** | blanc sur `#a0452a` | **6,21:1** | Conforme |
| Puce ou humeur active | blanc sur `#55694f` | 5,97:1 | Conforme |
| Texte sur le fond | `#2b3a2c` sur `#f5efe3` | 10,51:1 | Conforme |
| Texte sur les cartes et boutons | `#2b3a2c` sur `#fffaf0` | 11,57:1 | Conforme |
| Texte sur l'en-tête et la confirmation | `#2b3a2c` sur `#dde5d3` | 9,30:1 | Conforme |
| Texte secondaire sur le fond | `#526050` sur `#f5efe3` | 5,83:1 | Conforme |
| Texte secondaire sur les cartes | `#526050` sur `#fffaf0` | 6,41:1 | Conforme |
| Message d'erreur | `#9b1c1c` sur `#f5efe3` | 7,12:1 | Conforme |

Le contour des commandes et le liseré de focus (`#2b3a2c`) atteignent 10,51:1 sur le fond. Le contour de 2,61:1 relevé sur la Piste B est donc corrigé.

### Navigation au clavier

| Vérification | Résultat |
| --- | --- |
| Tab et Maj + Tab atteignent chaque commande, dans l'ordre de lecture | Réussi |
| Liseré de focus visible sur chaque commande (3 px) | Réussi |
| Espace active les cartes d'humeur et les puces | Réussi |
| Entrée active les boutons | Réussi |
| Parcours complet, de l'humeur à « J'aime », sans souris | Réussi |
| « Pas pour moi » retire le film, « Autre proposition » change les films | Réussi |
| Le focus suit le changement d'écran | Réussi |
| Les erreurs s'affichent sans humeur ou sans genre | Réussi |
| Aucun piège de focus | Réussi |

### Cibles tactiles

Toutes les commandes mesurent au moins 48 px de haut et de large, en largeur 375 px, sans défilement horizontal.

### Non vérifié

- Lecteur d'écran (VoiceOver ou NVDA).
- Autres navigateurs et vrai téléphone.

## 2. Protocole du test utilisateur

**Scénario (à lire tel quel) :** « Tu es fatigué·e et il te reste moins de deux heures : choisis une comédie à regarder ce soir avec des amis, puis indique que le film te plaît. »

1. Commencer par le test de 5 secondes, puis fermer ou masquer la maquette.
2. Rouvrir la maquette, lire le scénario une seule fois et lancer un chronomètre de 5 minutes.
3. Demander au camarade de penser à voix haute.
4. Rester silencieux : ne pas guider, ne pas pointer l'écran, ne pas justifier les choix.
5. Arrêter à la confirmation « Bon film ! » ou après 5 minutes.

## 3. Fiche d'observation — à remplir pendant le test

**App testée :** CineMood (maquette)  
**Testeur :**  
**Observateur :** Dorian Cotting  
**Date :**  
**Tâche donnée :** voir le scénario ci-dessus

### Test 5 secondes

« C'est une appli pour… » (phrase du testeur) :

Écart avec l'intention :

### Test de localisation

Consigne dite : « Montrez où vous tapoteriez pour : obtenir une recommandation de film. »

Le doigt est allé au **bon** contrôle : oui / non / à côté  
Hésitation :  
Dit à voix haute :  
J'ai aidé : oui / non

### Résultats du parcours

**Tâche réussie :** oui / non  
**Temps mis :**

**Hésitations observées (au moins 2) :**

1.
2.

**Remarques spontanées :**

-

## 4. Actions correctives — à remplir après le test

Deux correctifs prioritaires, déduits des frictions observées et chiffrés si possible.

| Priorité | Friction observée | Avant | Après (prévu) |
| --- | --- | --- | --- |
| 1 | | | |
| 2 | | | |
