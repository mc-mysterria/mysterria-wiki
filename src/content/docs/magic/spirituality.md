---
title: "Spirituality"
description: "How Spirituality works on Mysterria: maximum Spirituality by Sequence and Pathway, regeneration, what Madness and Tiredness do to it, and running out."
sidebar:
  label: Spirituality
  order: 7
---

**Spirituality** is the energy your abilities spend, and it refills on its own over time. Running out does not kill you, but it can drive you towards Madness.

It shows on the blue bar at the top of your screen (or the movable bar of the [Client Mod](/guides/client-mod/)) and on your character screen (`/coi menu character`).

## How much Spirituality do I have?

Your maximum Spirituality is worked out like this:

**Maximum = base for your Sequence × (0.5 + 0.5 × your Acting progress) × your Pathway's multiplier**

Right after you advance, with 0% Acting, you have **half** of your full maximum. It grows as you act and reaches the full value at 100% Acting. At Sequence 0 it always counts as full.

| Sequence | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
|---|---|---|---|---|---|---|---|---|---|---|
| **Base** | 100 | 250 | 500 | 1,000 | 2,500 | 5,000 | 10,000 | 25,000 | 70,000 | 100,000 |

### Pathway multipliers

Pathways not listed here use x1.0.

| Pathway | Multiplier by Sequence |
|---|---|
| Fool | x1.1 at 9, x1.15 at 8, x1.2 at 7, x1.25 at 6 to 5, x1.4 at 4 to 3, x1.6 at 2 to 0 |
| Moon | x1.08 at 9 to 3, x1.7 at 2, x1.8 at 1, x1.89 at 0 |
| Door | x1.0 at 9 to 8, x1.2 at 7 to 5, x1.35 at 4 to 3, x1.5 at 2, x1.65 at 1 to 0 |
| Red Priest | x1.02 at 9, x1.08 at 8, x1.15 at 7, x1.25 at 6, x1.3 at 5 to 4, x1.4 at 3, x1.55 at 2 to 0 |
| Wheel of Fortune | x1.1 at 9, x1.15 at 8 to 7, x1.4 at 6, x1.45 at 5 to 0 |
| Darkness | x1.15 at 9 to 7, x1.3 at 6 to 0 |
| Death | x1.1 at 9, x1.15 at 8, x1.2 at 7 to 0 |
| Hanged Man | x1.05 at 9, x1.12 at 8 to 0 |
| Twilight Giant | x1.0 at 9 to 5, x1.2 at 4 to 0 |

A Moon Deity has about 189,000 Spirituality, and a Sequence 9 Seer with full Acting has 110.

### What else changes my maximum?

- [Boons](/magic/boons/) add their own share on top of your Pathway.
- **Path of Shortcut** (a starter bonus) lowers your maximum by **10% forever**, at every Sequence. See [Quick Start](/general/start/#4-choose-your-starter-bonus).
- Breaking a Sun **Notarization** contract can be punished with **Spiritual Binding**, which also lowers your maximum by 10%.
- A **Uniqueness** and some passive abilities raise it. A Darkness Beyonder's Nocturnality raises it at night.

## How fast does it come back?

Every second you regain **1/400 of your maximum, plus 1**. A Sequence 9 Beyonder with 100 Spirituality regains about 1 a second, and a Sequence 4 with 5,000 regains about 13. An empty bar refills in under 7 minutes when nothing slows it down.

Madness and Tiredness slow it down, and the two stack.

| Madness | Regeneration speed |
|---|---|
| Below 25% | Full |
| 25% or more | 80% |
| 50% or more | 60% |
| 75% or more | 30% |

| Tiredness | Regeneration speed |
|---|---|
| Below 65 | Full |
| 65 or more | 85% |
| 85 or more | 70% |

At 75% Madness and 85 Tiredness together you regenerate at only 21% speed.

### Ways to refill faster

- **Spiritualism** (Fool and Darkness, Sequence 9) adds 1% of your maximum every 5 seconds.
- You can only have **one** Spirituality regeneration passive switched on at a time, even if you own several.
- **Spirituality potions** restore part of your Spirituality at once. They are in the Helping Card exchanges of the [dungeons](/guides/dungeons/).
- A church can give the **Spirituality Restore** gift. See [Churches](/magic/churches/).

## What happens when I run low?

- Every 2.5 minutes you stay **below 10%** adds **1% Madness**.
- If you lack Spirituality for a cast, the game lets you pay the missing part in Madness, at **0.2% Madness per missing point**. It refuses if that would take you to 90% Madness or more, and the refusal also switches off all your toggled abilities.
- **At 0**, every toggled ability switches off.

At high Sequences a single cast can cost thousands. See [Madness and Mutation](/magic/mutation/) for what Madness does, and [Conditions](/magic/conditions/) for Tiredness.
