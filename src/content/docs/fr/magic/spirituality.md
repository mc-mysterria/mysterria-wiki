---
title: "Spiritualité"
description: "Comment marche la Spiritualité sur Mysterria : Spiritualité maximale selon la Séquence et la Voie, régénération, effets de la Folie et de la Fatigue, et ce qui se passe quand tu tombes à court."
sidebar:
  label: Spiritualité
  order: 7
---

La **Spiritualité** est l'énergie que dépensent tes capacités, et elle se recharge toute seule avec le temps. Tomber à court ne te tue pas, mais ça peut te pousser vers la Folie.

Elle s'affiche sur la barre bleue en haut de ton écran (ou sur la barre déplaçable du [Client Mod](/fr/guides/client-mod/)) et sur l'écran de ton personnage (`/coi menu character`).

## Combien de Spiritualité ai-je ?

Ta Spiritualité maximale se calcule ainsi :

**Maximum = base de ta Séquence × (0,5 + 0,5 × ta progression d'Interprétation) × multiplicateur de ta Voie**

Juste après une progression, avec 0 % d'Interprétation, tu as **la moitié** de ton maximum complet. Il grandit à mesure que tu interprètes ton rôle et atteint sa pleine valeur à 100 % d'Interprétation. À la Séquence 0, il compte toujours comme plein.

| Séquence | Base |
|---|---:|
| 9 | 100 |
| 8 | 250 |
| 7 | 500 |
| 6 | 1 000 |
| 5 | 2 500 |
| 4 | 5 000 |
| 3 | 10 000 |
| 2 | 25 000 |
| 1 | 70 000 |
| 0 | 100 000 |

### Multiplicateurs de Voie

Les Voies qui ne sont pas listées ici utilisent x1,0.

| Voie | Multiplicateur selon la Séquence |
|---|---|
| Fool | x1,1 à la 9, x1,15 à la 8, x1,2 à la 7, x1,25 de la 6 à la 5, x1,4 de la 4 à la 3, x1,6 de la 2 à la 0 |
| Moon | x1,08 de la 9 à la 3, x1,7 à la 2, x1,8 à la 1, x1,89 à la 0 |
| Door | x1,0 de la 9 à la 8, x1,2 de la 7 à la 5, x1,35 de la 4 à la 3, x1,5 à la 2, x1,65 de la 1 à la 0 |
| Red Priest | x1,02 à la 9, x1,08 à la 8, x1,15 à la 7, x1,25 à la 6, x1,3 de la 5 à la 4, x1,4 à la 3, x1,55 de la 2 à la 0 |
| Wheel of Fortune | x1,1 à la 9, x1,15 de la 8 à la 7, x1,4 à la 6, x1,45 de la 5 à la 0 |
| Darkness | x1,15 de la 9 à la 7, x1,3 de la 6 à la 0 |
| Death | x1,1 à la 9, x1,15 à la 8, x1,2 de la 7 à la 0 |
| Hanged Man | x1,05 à la 9, x1,12 de la 8 à la 0 |
| Twilight Giant | x1,0 de la 9 à la 5, x1,2 de la 4 à la 0 |

Une Divinité Moon a environ 189 000 de Spiritualité, et un Seer de Séquence 9 avec toute son Interprétation en a 110.

### Qu'est-ce qui change encore mon maximum ?

- Les [Grâces](/fr/magic/boons/) ajoutent leur propre part en plus de ta Voie.
- La **Voie du Raccourci** (un bonus de départ) baisse ton maximum de **10 % pour toujours**, à chaque Séquence. Voir [Démarrage rapide](/fr/general/start/#4-choisis-ton-bonus-de-départ).
- Rompre un contrat **Notarization** de la Voie Sun peut être puni par un **Spiritual Binding**, qui baisse aussi ton maximum de 10 %.
- Une **Unicité** et certaines capacités passives l'augmentent. La Nocturnality d'un Beyonder Darkness l'augmente la nuit.

## À quelle vitesse revient-elle ?

Chaque seconde, tu récupères **1/400 de ton maximum, plus 1**. Un Beyonder de Séquence 9 avec 100 de Spiritualité récupère environ 1 par seconde, et un Séquence 4 avec 5 000 récupère environ 13. Une barre vide se remplit en moins de 7 minutes quand rien ne la ralentit.

La Folie et la Fatigue la ralentissent, et les deux se cumulent.

| Folie | Vitesse de régénération |
|---|---|
| Moins de 25 % | Pleine |
| 25 % ou plus | 80 % |
| 50 % ou plus | 60 % |
| 75 % ou plus | 30 % |

| Fatigue | Vitesse de régénération |
|---|---|
| Moins de 65 | Pleine |
| 65 ou plus | 85 % |
| 85 ou plus | 70 % |

Avec 75 % de Folie et 85 de Fatigue en même temps, tu ne régénères qu'à 21 % de la vitesse.

### Comment se recharger plus vite

- **Spiritualism** (Fool et Darkness, Séquence 9) ajoute 1 % de ton maximum toutes les 5 secondes.
- Tu ne peux avoir **qu'une seule** capacité passive de régénération de Spiritualité activée à la fois, même si tu en possèdes plusieurs.
- Les **potions de Spiritualité** rendent d'un coup une partie de ta Spiritualité. Elles se trouvent dans les échanges de Helping Cards des [donjons](/fr/guides/dungeons/).
- Une église peut offrir le don **Spirituality Restore**. Voir [Églises](/fr/magic/churches/).

## Que se passe-t-il quand je tombe à court ?

- Chaque tranche de 2,5 minutes passée **sous 10 %** ajoute **1 % de Folie**.
- S'il te manque de la Spiritualité pour lancer un sort, le jeu te laisse payer la partie manquante en Folie, à raison de **0,2 % de Folie par point manquant**. Il refuse si ça te ferait atteindre 90 % de Folie ou plus, et ce refus désactive aussi toutes tes capacités activées.
- **À 0**, chaque capacité activée se désactive.

Aux hautes Séquences, un seul sort peut coûter des milliers de points. Voir [Folie et Mutation](/fr/magic/mutation/) pour ce que fait la Folie, et [États](/fr/magic/conditions/) pour la Fatigue.
