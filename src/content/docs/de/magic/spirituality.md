---
title: "Spiritualität"
description: "Wie Spiritualität auf Mysterria funktioniert: maximale Spiritualität nach Sequenz und Pfad, Regeneration, was Wahnsinn und Müdigkeit damit machen und was passiert, wenn sie ausgeht."
sidebar:
  label: Spiritualität
  order: 7
---

**Spiritualität** ist die Energie, die deine Fähigkeiten verbrauchen, und sie füllt sich mit der Zeit von selbst wieder auf. Geht sie dir aus, stirbst du nicht, aber sie kann dich in Richtung Wahnsinn treiben.

Du siehst sie an der blauen Leiste oben auf dem Bildschirm (oder an der verschiebbaren Leiste der [Client-Mod](/de/guides/client-mod/)) und auf deinem Charakterbildschirm (`/coi menu character`).

## Wie viel Spiritualität habe ich?

So wird deine maximale Spiritualität berechnet.

**Maximum = Grundwert deiner Sequenz × (0,5 + 0,5 × dein Schauspiel-Fortschritt) × Faktor deines Pfades**

Direkt nach einem Aufstieg, mit 0 % Schauspielen, hast du die **Hälfte** deines vollen Maximums. Es wächst, während du schauspielst, und erreicht bei 100 % Schauspielen den vollen Wert. Auf Sequenz 0 zählt es immer als voll.

| Sequenz | Grundwert |
|---|---:|
| 9 | 100 |
| 8 | 250 |
| 7 | 500 |
| 6 | 1.000 |
| 5 | 2.500 |
| 4 | 5.000 |
| 3 | 10.000 |
| 2 | 25.000 |
| 1 | 70.000 |
| 0 | 100.000 |

### Faktoren der Pfade

Pfade, die hier nicht stehen, nutzen x1,0.

| Pfad | Faktor nach Sequenz |
|---|---|
| Fool | x1,1 bei 9, x1,15 bei 8, x1,2 bei 7, x1,25 bei 6 bis 5, x1,4 bei 4 bis 3, x1,6 bei 2 bis 0 |
| Moon | x1,08 bei 9 bis 3, x1,7 bei 2, x1,8 bei 1, x1,89 bei 0 |
| Door | x1,0 bei 9 bis 8, x1,2 bei 7 bis 5, x1,35 bei 4 bis 3, x1,5 bei 2, x1,65 bei 1 bis 0 |
| Red Priest | x1,02 bei 9, x1,08 bei 8, x1,15 bei 7, x1,25 bei 6, x1,3 bei 5 bis 4, x1,4 bei 3, x1,55 bei 2 bis 0 |
| Wheel of Fortune | x1,1 bei 9, x1,15 bei 8 bis 7, x1,4 bei 6, x1,45 bei 5 bis 0 |
| Darkness | x1,15 bei 9 bis 7, x1,3 bei 6 bis 0 |
| Death | x1,1 bei 9, x1,15 bei 8, x1,2 bei 7 bis 0 |
| Hanged Man | x1,05 bei 9, x1,12 bei 8 bis 0 |
| Twilight Giant | x1,0 bei 9 bis 5, x1,2 bei 4 bis 0 |

Eine Gottheit des Moon hat etwa 189.000 Spiritualität, und ein Seer der Sequenz 9 mit vollem Schauspielen hat 110.

### Was ändert mein Maximum noch?

- [Gnadenpfade](/de/magic/boons/) geben zusätzlich zu deinem Pfad einen eigenen Anteil.
- Der **Pfad der Abkürzung** (ein Startbonus) senkt dein Maximum **für immer um 10 %**, auf jeder Sequenz. Siehe [Schnellstart](/de/general/start/#4-wähle-deinen-startbonus).
- Wer einen Vertrag aus der **Notarization** des Sun bricht, kann mit **Spiritual Binding** bestraft werden. Auch das senkt dein Maximum um 10 %.
- Eine **Einzigartigkeit** und manche passiven Fähigkeiten erhöhen es. Bei einem Beyonder des Darkness erhöht Nocturnality es nachts.

## Wie schnell kommt sie zurück?

Jede Sekunde bekommst du **1/400 deines Maximums plus 1** zurück. Ein Beyonder der Sequenz 9 mit 100 Spiritualität bekommt etwa 1 pro Sekunde zurück, und einer der Sequenz 4 mit 5.000 etwa 13. Eine leere Leiste füllt sich in unter 7 Minuten, wenn nichts sie bremst.

Wahnsinn und Müdigkeit bremsen sie, und beides wirkt zusammen.

| Wahnsinn | Regenerationstempo |
|---|---|
| Unter 25 % | Voll |
| 25 % oder mehr | 80 % |
| 50 % oder mehr | 60 % |
| 75 % oder mehr | 30 % |

| Müdigkeit | Regenerationstempo |
|---|---|
| Unter 65 | Voll |
| 65 oder mehr | 85 % |
| 85 oder mehr | 70 % |

Bei 75 % Wahnsinn und 85 Müdigkeit gleichzeitig regenerierst du nur mit 21 % Tempo.

### Wege, schneller aufzufüllen

- **Spiritualism** (Fool und Darkness, Sequenz 9) gibt dir alle 5 Sekunden 1 % deines Maximums.
- Du kannst immer nur **eine** passive Fähigkeit für Spiritualitäts-Regeneration eingeschaltet haben, auch wenn du mehrere besitzt.
- **Spirituality potions** stellen sofort einen Teil deiner Spiritualität wieder her. Es gibt sie beim Tausch gegen Helping Cards in den [Dungeons](/de/guides/dungeons/).
- Eine Kirche kann das Geschenk **Spirituality Restore** geben. Siehe [Kirchen](/de/magic/churches/).

## Was passiert, wenn sie knapp wird?

- Alle 2,5 Minuten **unter 10 %** bekommst du **1 % Wahnsinn**.
- Fehlt dir Spiritualität für einen Zauber, lässt dich das Spiel den fehlenden Teil mit Wahnsinn bezahlen, und zwar **0,2 % Wahnsinn pro fehlendem Punkt**. Würde dich das auf 90 % Wahnsinn oder mehr bringen, lehnt es ab, und dabei schalten sich auch alle deine dauerhaft aktivierten Fähigkeiten ab.
- **Bei 0** schaltet sich jede dauerhaft aktivierte Fähigkeit ab.

Auf hohen Sequenzen kann ein einziger Zauber Tausende kosten. Was Wahnsinn bewirkt, steht unter [Wahnsinn und Mutation](/de/magic/mutation/), und Müdigkeit unter [Zustände](/de/magic/conditions/).
