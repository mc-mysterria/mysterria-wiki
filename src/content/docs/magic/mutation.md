---
title: "Mutation"
description: "Detailed information about the mechanics of advancing as a Beyonder on the server"
sidebar:
    label: ☠️ Mutation
    order: 4
    badge: "New!"
---

![Helpful image](../../../assets/magic/lotm.jpg)

### What is Madness?

**Madness** is a value from **0% to 100%** that represents how close a Beyonder is to losing their mind - and their
control over their own power - entirely.

It replaces the old Safe Mode system. There is no longer a way to simply "turn on" protection. Instead, every
Beyonder must actively manage their Madness level.

Madness will **gradually decrease on its own over time**, but the recovery is extremely slow. Certain spells can also
reduce it.

:::danger[At 100% Madness]
If your Madness reaches **100%**, you **lose control** of your own power. What happens next depends on how strong you
already are - see [What happens when you lose control?](#what-happens-when-you-lose-control) below. For a weak enough
Beyonder this can still mean losing everything permanently, but for most established characters it no longer does.
:::

---

### Temporary, Permanent, and Godhood Madness

Several components determine how low your Madness can fall:

| Type | Description | Can it be healed? |
|------|-------------|-------------------|
| **Temporary Madness** | Standard Madness gained from most sources | Yes - slowly over time, or via certain spells |
| **Permanent Madness** | Madness gained from dangerous advancement, pathway switching, Ordeals, and certain powers | **No** - cannot be treated by any means |
| **Godhood floor** | A minimum carried by a seated Sequence 0 god, set by the throne's base floor and relieved as their congregation grows | Only through church anchors, or eligible Church relief events |

Your effective minimum is your Permanent Madness plus whatever Godhood floor your congregation hasn't relieved yet.
Healing, passive recovery, gifts, and abilities stop at this combined floor - they can never push you below it.

A seated god starts at a **90% base floor**, which an active, growing congregation relieves toward 0% as it
approaches **30 effective anchors**. Thrones below Sequence 0 carry smaller base floors (75% at Sequence 1, down to
25% at Sequence 4; Sequence 5 and weaker carry none at all), each with its own anchor requirement. See
[Sequence 0](/magic/sequence-zero/) for how a throne and its congregation actually work.

:::note[Why the combined floor never reaches 100%]
However high your Permanent Madness and Godhood floor add up, the game will never let your resting floor exceed
**95%**. A floor of exactly 100% would be an inescapable loop - the floor would be the thing killing you, and also
the thing putting you right back at 100% a few seconds later. Reaching 100% and losing control is still very much
possible; it just has to come from *temporary* Madness climbing the rest of the way, not from the floor itself.
:::

If you've ascended to godhood, standing within 24 blocks of your god lightens the load: believers there take
**10% less incoming Madness** (and 15% slower Tiredness gain) while the aura is active.

---

### What can cause Madness?

There are several ways to accumulate Madness:

- Advancing with incomplete acting progress or an incomplete ritual
- Switching pathways before the relevant safe threshold, or switching to a non-adjacent Pathway
- Being driven crazy by your own abilities (e.g. Hanged Man pathway)
- Being driven crazy by other players' abilities (e.g. Visionary pathway)
- Letting your Spirituality sit below 10% of its maximum - every couple of minutes spent there adds a slow drip of Madness
- Paying for a spell you can't quite afford: if an ability would fail only because you're a little short on
  Spirituality, the shortfall can be paid in Madness instead (a punishing 0.2% Madness per missing point) rather than
  failing outright - but the game refuses the trade outright once it would put you at 90% Madness or higher

:::note[Sequences are no longer skippable]
Potions only ever advance you exactly one Sequence at a time now - drinking a potion for anything further than the
Sequence directly below your current one is simply refused, with no Madness cost and no way around it. If you've
heard stories of players skipping several Sequences at once for a pile of Madness, that's an older version of the
system; it isn't how advancement works anymore.
:::

### Advancement risk

Default potion advancement rules:

- At least **95% Acting** is required before you can advance past a Sequence at all - below that, the potion simply
  refuses to work, and repeated attempts risk a control-loss roll of their own. Between 95% and 100% Acting, you can
  advance anyway, at the cost of temporary Madness that scales up to **30%** at exactly 95%.
- Every Sequence you're advancing through has an assigned ritual score. Completing it in full costs nothing; leaving
  it incomplete lets you advance anyway, for a proportional share of up to **40% temporary** and **10% permanent**
  Madness - the confirmation screen always shows you the exact numbers before you drink. This applies to every
  advancement, from Sequence 8 all the way down to Sequence 0, not just the early game.
- Failed or cancelled advancement does not charge these penalties.

The confirmation screen shown before drinking is authoritative for the attempt. Server administrators may adjust
these default values.

### Pathway switching

A switch must still advance you by exactly one Sequence: the potion must be for the next Sequence after your current
one.

| Switch | When safe | Risk before/without safety |
| --- | --- | --- |
| Adjacent Pathways | The switch lands you at Sequence 4 or stronger | 25% temporary, 10% permanent, 75% survival |
| Lord of Mysteries group | The switch lands you at Sequence 3 or stronger | 55% temporary, 20% permanent, 20% survival |
| Non-adjacent Pathways | Never treated as a safe neighboring switch | 45% temporary, 15% permanent, 35% survival |

A safe neighboring switch still requires complete acting and ritual conditions to avoid their separate penalties.
Transfer-token pathway changes are exempt from pathway-switch Madness.

---

### What are the effects of high Madness?

High Madness doesn't just threaten loss of control - it actively impairs your abilities as it climbs through four
stages:

| Madness | Stage | Spirituality regen | Ability lockout |
|---|---|---|---|
| 0-24% | Stable | Normal | None |
| 25-49% | Warning | 80% speed | None yet, but the warning starts |
| 50-74% | Partial Loss | 60% speed | A random quarter of your abilities (at least one) |
| 75-99% | Critical | 30% speed | A random half of your abilities (at least one) |
| 100% | - | - | Loss of control |

Locked abilities simply can't be cast until your Madness drops back below the stage that locked them - the Abilities
menu marks them so you can see which ones are currently out of reach.

### Reducing Madness

Madness dissipates on its own at a slow baseline rate while you're online, roughly doubling while you're actually
asleep in a bed and slowing down further if your Tiredness is high. Church membership and active ritual/anchor work
can add to that baseline - see [Churches](/magic/churches/).

Ordinary recovery and curing abilities can remove only recoverable Madness above your combined floor. Outside magic
combat and PvP areas, **Placate**, **Soul Suture**, and **Requiem** use performance-based minigames: difficulty
scales with the target's Madness and recent attempts, and the score controls how effective the cure is. In combat
and PvP areas, these abilities retain their normal chance-based behavior.

---

### What happens when you lose control?

Historically, hitting 100% Madness - or a handful of other triggers below - meant instant, permanent deletion of
your character: no second chance, no animation beyond a brief warning, every hour of progress gone. That is now the
exception rather than the rule. Losing control still **always** costs you something real, but for most established
characters it regresses you rather than erasing you.

:::caution[Who still gets the old outcome]
If your **strongest** Pathway is still weaker than Sequence 6 (that is, Sequence 7, 8, or 9), you're judged too weak
to be worth sparing - the full old-style wipe still applies, unchanged, specifically so nobody can self-mutate on
purpose for an easy, buffed Warden fight. At Sequence 6 or stronger on your best Pathway, you get one of three
**Ordeals** instead.
:::

#### The three Ordeals

Which Ordeal you get isn't random - it's decided by *why* you lost control, so the punishment always matches the
cause:

- **Bloodlust** - triggered by Madness overflowing to 100%, or a failed Avatar takeover. You black out and become the
  mutated Warden itself, steerable from spectator mode for up to 90 seconds. The more threatening what you kill
  while rampaging, the fewer Sequences you lose when it ends; disconnecting or a server restart mid-rampage resolves
  you at a middling outcome rather than the worst one.
- **Hollowing** - triggered by a failed pathway-switch or new-Beyonder potion roll. Your soul is banished and must
  hunt down a living Wild Beyonder to take over as a new body, inside a 2-hour wall-clock deadline. Your Pathway
  never changes, only your Sequence - and the fresher and closer in kinship the vessel you find, the less you fall.
- **Sealing** - the catch-all for everything else: a broken Notarization contract, Hanged's BlackArmor depravation
  cap, Visionary's ascent, an admin's manual mutate command, Fortune's luck hitting its floor, or anything
  unrecognized. You're confined, fully embodied, to your own private sealed realm for a 14-day sentence - shortened
  only by exile bounties while briefly released during a Crimson Moon, never by anything else.

Whichever Ordeal you draw, entering it always costs the same baseline up front: **half of your current Sequence's
acting bar**, any Uniqueness claim you were holding on that Pathway, and **at least one Sequence** of regression -
Ordeal-specific scoring can make any of these worse, but never better than that floor.

:::danger[Repeat offenders don't keep getting mercy]
Every time you enter an Ordeal, an offense counter ticks up; a clean 14-day stretch resets it. A **2nd** offense
inside that window adds an extra Sequence of regression and **15% permanent Madness** on top of whatever the Ordeal
already does. A **3rd** offense inside the window skips the Ordeal entirely and applies the **old permanent wipe** -
no exceptions. Progress is regressed, never erased, except in this one specific case.
:::

#### The old wipe, when it still applies

Whether you're simply too weak for an Ordeal or you've burned through your third offense, the outcome is the same as
the old system always was:

- You **lose all your abilities** permanently
- You **lose your pathway and sequence**
- You **lose all your items**
- Your stripped power may manifest as a powerful mutant creature that hunts you and nearby players
- If the mutant is killed, it may drop a Beyonder Characteristic of your Sequence
- You receive a cooldown of **three real days** before you can become a Beyonder again

:::tip[Prevention is everything]
Unlike the old system, there is no Safe Mode to protect you. The best protection is still keeping your Madness low -
complete your rituals, avoid reckless pathway switches, and use Madness-reducing spells when available. An Ordeal is
survivable, but it is never free.
:::
