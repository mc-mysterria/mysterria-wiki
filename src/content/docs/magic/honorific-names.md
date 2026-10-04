---
title: "Honorific Names"
description: "Detailed information about the Honorific Names feature unlocked at Sequence 4"
sidebar:
    label: 📜 Honorific Names
    order: 13
---

![Helpful image](../../../assets/magic/lotm.jpg)

### What is an Honorific Name?

An **Honorific Name** is a sacred invocation a Beyonder can create upon reaching **Sequence 4**. It must describe the existence it calls: a valid name points clearly enough to one Beyonder for the spiritual world to answer.

For example, a Sequence 4 or 3 Beyonder might declare:

> *Lord of Mysteries*
> 
> *King of Space-Time*
> 
> *Beacon of Destiny*
> 
> *Embodiment of Sefirah Castle*
>
> *The Wanderer Known to Mysterria*

Once accepted, the name becomes a **ritual instrument** that other players can chant.

---

### Setting Your Honorific Name

Starting at **Sequence 4**, you can edit your Honorific Name through your **Mystic Arts** menu. The required length changes as you advance:

| Current Sequence | Required lines |
| --- | ---: |
| Sequence 4-3 | 5 |
| Sequence 2-1 | 4 |
| Sequence 0 | 3 |

When advancement shortens the invocation, the system preserves the final identifying line where possible. The name is then revalidated and may remain inactive until its other lines describe your new existence correctly.

### What makes a name valid?

An Honorific Name must be complete, unique, and meaningfully connected to its owner. Recognized identity evidence includes:

- Your username or a meaningful part of it
- Your Pathway or current Sequence title
- An ability available at your current Sequence
- Your town, Church, assigned Church site, linked land, or linked nation
- Recognized Pathway concepts, synonyms, and approved phrases
- An approved personal identity descriptor

Matching ignores ordinary differences in capitalization, punctuation, spacing, apostrophes, and hyphens. English and Ukrainian Pathway, Sequence, and ability names are recognized.

The system rejects incomplete names, incorrect line counts, blank or repeated lines, ordinary chat phrases, unrecognized one-word filler, forbidden words or lines, vague descriptions, and invocations that already answer to somebody else. A rejected name remains saved as a draft, but chanting it has no effect until it becomes valid.

:::caution[Choose wisely]
Your Honorific Name does not need to include your username, but it must contain enough genuine identity evidence to distinguish you. Another player cannot claim the same accepted invocation.
:::

---

### Chanting Another Player's Name

Any player who knows an active Honorific Name can attempt to **chant it**. Each line must be sent as a normal chat message in the correct order. After starting, the chanter has **15 seconds between lines** to continue the invocation.

If the chant is completed successfully:

- The chanter completes the prayer and enters a **15-minute chanting cooldown**
- If you are online, you receive the chanter's location and a response prompt
- The response request expires after **2 minutes**
- If the name belongs to a Church participant, the chant also counts as an external Church prayer
- If the chanter is eligible to join that Church, the chanted participant may offer them an invitation
- The chanted player - the one whose name was just completed, not the chanter - is credited with the legendary deed "Your honorific invoked," one of the deeds that counts toward [Sequence 0](/magic/sequence-zero/)'s legendary-deeds requirement

---

### Response Actions

When your name is chanted, you can choose one of the following:

| Action | Effect |
|--------|--------|
| **Open Portal** | Teleport directly to the player who chanted your name |
| **Strike with Lightning** | Smite the chanting player with a lightning bolt - useful when you did not consent to being named |
| **Bestow an Item** | Transfer one item from your inventory to the chanting player across any distance |

Taking a response action starts a **30-minute response cooldown for the owner**. This does not globally disable the Honorific Name: other players may still chant it, while each chanter has their own chanting cooldown.

---

### Sequence 0: Deity Name

Upon reaching **Sequence 0**, a Beyonder transcends into a true Deity and uses a **three-line** Honorific Name.

Chanting a Deity's name still opens the **standard response menu** for the Deity - they are notified and may choose to act just as any Sequence 4 Beyonder would. However, regardless of whether the Deity responds or is even online, the chant **also produces a special effect on the chanter themselves**. The exact effect depends on the pathway of the Deity:

- Chanting the name of a **Red Priest** Deity may grant a **Strength potion effect** after a special animation
- Other pathways have their own unique blessings tied to their divine domain

:::tip[The effect triggers unconditionally]
The special chanter effect does not require the Deity to respond or be online. The blessing manifests the moment the chant is completed successfully, independently of any action the Deity takes.
:::

Each pathway's blessing is defined once, as an ambient particle/sound preset plus up to **2 capped potion effects** on the chanter, lasting up to **120 seconds**. A pathway can ship a fully custom blessing in code instead of the configured one, but every throne always has one or the other - no god is ever blessing-less.

:::note[The blessing has its own cooldown - shared by every chanter]
Each pathway's blessing has its own cooldown, by default **60 minutes** (never configurable below 30). It is **shared across every chanter of that god**, not tracked per player: if someone else chanted that Deity's name within the cooldown window, your completed chant still reaches the Deity through the normal response menu, but the special blessing itself stays silent until the cooldown clears.
:::
