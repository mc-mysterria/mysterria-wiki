---
title: "Health System"
description: "Detailed information about magical potions on the server"
sidebar:
    label: ❤️ Health System
    order: 6
---

![Helpful image](../../../assets/magic/lotm.jpg)

### What do you mean?

Upon advancing, you may notice - your vanilla HP does not change! Which is supposed to happen, since according to the lore after advancing you become more of a Deity, and less of a Mundane Man, which means you probably should have more health and resistance.

That's... true, because your real health is hidden from you, and you can only *feel* it while fighting with other Beyonders or Beyonder Creatures. Additionally, Spectator can also tell you your current HP, since they have some special skills for that.

### How does it work?

Each Beyonder has a hidden health value attached to him. It is not visible anywhere, and is only used in internal damage calculations when one Beyonder attacks another with some spell.

- Let's say Player A is Sequence 4 Sun beyonder - and has 400 HP
- His enemy is Player B - Sequence 8 Fool - which has 100 HP

What happens when Player A attacks Player B?

- Powerful sun spell deals 80DMG, which only leaves 20HP for the Player B
- His vanilla HP goes down by 80%, only leaving two hearts after just one spell!

What happens when Player B attacks Player A?

- Weak fool spell deals 25DMG, which leaves 375 HP for the Player A
- Player A only loses half of the vanilla heart, effectively tanking it

### Why not vanilla then?

In my opinion, no.

First, it's arduous to balance skill progressions using vanilla hearts, since the scaled damage will also be mitigated by the full enchanted armor, resistance effects, absorption, etc. 

Which means that magic spells will deal no real damage unless they deal **A LOT OF** damage, which in its wake will break armor almost instantly, one-shot every non-equipped player, and it is generally hard to deal with.