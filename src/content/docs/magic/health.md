---
title: "Health System"
description: "Hidden HP, Tiredness, and the Freeze/Mental Pressure conditions that affect every Beyonder"
sidebar:
    label: ❤️ Health System
    order: 6
    badge: "New!"
---

![The madness bar](https://in.ikeepcalm.me/eG7JYtR9ypt7.png)

### What do you mean?

Upon advancing, you may notice - your vanilla HP does not change! Which is supposed to happen, since according to the lore after advancing you become more of a Deity, and less of a Mundane Man, which means you probably should have more health and resistance.

That's... true, because your real health is hidden from you, and you can only *feel* it while fighting with other Beyonders or Beyonder Creatures. Additionally, Spectator can also tell you your current HP, since they have some special skills for that.

### How does it work?

Each Beyonder has a hidden health value attached to him. It is not visible anywhere, and is only used in internal damage calculations when one Beyonder attacks another with some spell.

Your maximum hidden HP comes from a flat base of 50, multiplied per Sequence:

| Sequence | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
|---|---|---|---|---|---|---|---|---|---|---|
| Max HP | 50 | 75 | 125 | 175 | 225 | 450 | 675 | 1025 | 1375 | 1750 |

- Let's say Player A is Sequence 4 Sun beyonder - and has 450 HP
- His enemy is Player B - Sequence 8 Fool - which has 75 HP

What happens when Player A attacks Player B?

- A powerful sun spell deals 60 DMG, which only leaves 15 HP for Player B
- His vanilla HP goes down by 80%, only leaving two hearts after just one spell!

What happens when Player B attacks Player A?

- A weak fool spell deals 28 DMG, which leaves 422 HP for Player A
- Player A barely loses half a heart, effectively tanking it

### Why not vanilla then?

In my opinion, no.

First, it's arduous to balance skill progressions using vanilla hearts, since the scaled damage will also be mitigated by the full enchanted armor, resistance effects, absorption, etc. 

Which means that magic spells will deal no real damage unless they deal **A LOT OF** damage, which in its wake will break armor almost instantly, one-shot every non-equipped player, and it is generally hard to deal with.

---

### Tiredness

Separate from your hidden HP, every Beyonder carries a **Tiredness** gauge from 0% to 100% - plain fatigue from
staying awake and burning through magic, rather than anything to do with sanity.

- Tiredness creeps up on its own by roughly **1% every 5 minutes** you spend online and awake. Several things can
  slow that climb: a Darkness Beyonder's night-fed body resists it heavily (up to full immunity at Sequence 1), and
  standing in a god's Presence cuts incoming Tiredness gain by 15% within 24 blocks.
- Actually **sleeping in a bed** burns it off fast - about **1% per second** - so a real night's sleep clears it
  completely in well under two minutes.
- High Tiredness slows you down and saps your other resources:

| Tiredness | Effect |
|---|---|
| 40%+ | Slowness I |
| 65%+ | Slowness II, Spirituality regeneration drops to 85% speed |
| 85%+ | Slowness III, Spirituality regeneration drops to 70% speed, Madness dissipates more slowly |

See [Spirituality](/magic/spirituality/) for how Tiredness and Madness combine against your regeneration, and
[Mutation](/magic/mutation/) for Madness itself.

### Conditions: Freeze and Mental Pressure

Certain abilities can inflict two other 0-100% gauges on you directly - you won't accumulate these just by playing,
only by being on the receiving end of specific spells.

**Freeze** stacks apply Slowness that gets worse as they climb, and the real vanilla freezing effect (the screen
crust and the damage that comes with it) kicks in once you're past 75 stacks. Freeze decays on its own at 1 stack
per second (three times as fast while you're asleep).

**Mental Pressure** escalates through disorientation effects: Nausea and Slowness at low levels, Weakness added
(and your movement controls inverted) in the middle range, Blindness and Hunger layered on near the top. If it's
ever pushed to 90 or higher, it starts feeding directly into your Madness - roughly 0.02% Madness per point above 89,
every 10 seconds - so a caster who can hold you there is also grinding you toward a loss of control. Like Freeze, it
decays on its own (1 point every 2 seconds, tripled while asleep).