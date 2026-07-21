---
title: "Mutation"
description: "Detailed information about the mechanics of advancing as a Beyonder on the server"
sidebar:
    label: ☠️ Mutation
    order: 4
---

![Helpful image](../../../assets/magic/lotm.jpg)

### What is Madness?

**Madness** is a value from **0% to 100%** that represents how close a Beyonder is to losing their mind — and their powers — entirely.

It replaces the old Safe Mode system. There is no longer a way to simply "turn on" protection. Instead, every Beyonder must actively manage their Madness level.

Madness will **gradually decrease on its own over time**, but the recovery is extremely slow. Certain spells can also reduce it.

:::danger[At 100% Madness]
If your Madness reaches **100%**, you will **mutate and die**, losing all your Beyonder powers **permanently**. There is no coming back from this.
:::

---

### Temporary, Permanent, and Godhood Madness

Several components determine how low your Madness can fall:

| Type | Description | Can it be healed? |
|------|-------------|-------------------|
| **Temporary Madness** | Standard Madness gained from most sources | Yes — slowly over time, or via certain spells |
| **Permanent Madness** | Madness gained from dangerous advancement, pathway switching, and certain powers | **No** — cannot be treated by any means |
| **Godhood floor** | A minimum caused by your current high Sequence | Only through eligible Church relief |

Your effective minimum is:

`Permanent Madness + Godhood floor after Church relief`

Church support reduces only the Godhood component. It cannot erase Permanent Madness. Healing, passive recovery, gifts, and abilities stop at this combined floor.

---

### What can cause Madness?

There are several ways to accumulate Madness:

- Advancing with incomplete acting progress or an incomplete ritual where the advancement rules allow it
- Skipping Sequences
- Switching pathways before the relevant safe threshold or switching to a non-adjacent Pathway
- Being driven crazy by your own abilities (e.g. Hanged Man pathway)
- Being driven crazy by other players' abilities (e.g. Visionary pathway)
- Overusing Spirituality recklessly

### Advancement risk

Default potion advancement rules:

- At least **95% Acting** is required. Advancing below 100% adds temporary Madness, reaching **30%** at exactly 95% Acting.
- You may skip at most **3 Sequences** at once. Each skipped Sequence adds **15% temporary** and **5% permanent** Madness.
- Incomplete rituals for target Sequences **8-6** add a proportional share of up to **40% temporary** and **10% permanent** Madness.
- Ritual completion is mandatory when advancing to **Sequence 5 or stronger**.
- Failed or cancelled advancement does not charge these penalties.

The confirmation message shown before drinking is authoritative for the attempt. Server administrators may adjust these default values.

### Pathway switching

A switch must still advance you by exactly one Sequence: the potion must be for the next Sequence after your current one.

| Switch | When safe | Risk before/without safety |
| --- | --- | --- |
| Adjacent Pathways | Current Pathway is Sequence 4 or stronger | 25% temporary, 10% permanent, 75% survival |
| Lord of Mysteries group | Current Pathway is Sequence 3 or stronger | 55% temporary, 20% permanent, 20% survival |
| Non-adjacent Pathways | Never treated as a safe neighboring switch | 45% temporary, 15% permanent, 35% survival |

A safe neighboring switch still requires complete acting and ritual conditions to avoid their separate penalties. Transfer-token pathway changes are exempt from pathway-switch Madness.

---

### What are the effects of high Madness?

High Madness doesn't just threaten mutation — it actively impairs your abilities:

- **Slower Spirituality regeneration** — the higher your Madness, the slower your spiritual energy recovers
- **Spell lockout** — at sufficiently high Madness, **random spells may become unavailable** to you until your Madness drops

### Reducing Madness

Ordinary recovery and curing abilities can remove only recoverable Madness above your combined floor. Outside magic combat and PvP areas, **Placate**, **Soul Suture**, and **Requiem** use performance-based minigames: difficulty scales with the target's Madness and recent attempts, and the score controls how effective the cure is. In combat and PvP areas, these abilities retain their normal chance-based behavior.

---

### What is a Mutation?

If your Madness reaches 100%, this triggers a **Mutation** — a catastrophic loss of control:

- You will **lose all your abilities** permanently
- You will **lose your pathway and sequence**
- You will **lose all your items**
- Your stripped power may manifest as a powerful mutant creature that hunts you and nearby players
- If the mutant is killed, it may drop a Beyonder Characteristic of your Sequence
- You will receive a cooldown of **three real days** before you can become a Beyonder again

:::tip[Prevention is everything]
Unlike the old system, there is no Safe Mode to protect you. The only protection is keeping your Madness low — complete your rituals, avoid reckless pathway switches, and use Madness-reducing spells when available.
:::
