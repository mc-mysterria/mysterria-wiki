---
title: "Daily Tides"
description: "The seven server-wide daily modifiers, how to know which one is active, and what they never touch"
sidebar:
    label: 🌊 Daily Tides
    order: 14
    badge: "New!"
---

### What is a Tide?

A Tide is a server-wide modifier that lasts one calendar day. Exactly one Tide runs at a time,
it is identical for every player on every server in the network, and which Tide a given date
carries is **computed, not rolled** - it's a fixed function of the date and a seed value, never a
random draw at runtime.

That matters in a few concrete ways:

- Every server computes the same Tide independently, with nothing to sync.
- A restart in the middle of the day resumes the same Tide - there's nothing to restore.
- Because the schedule is deterministic, it's also knowable **ahead of time**. You can check what
  Tide is coming two weeks out and plan around it, instead of only reacting to whatever happens
  to be live right now.

:::note[Today's Tide is never a secret]
Nobody should have to read Discord to find out what's active. See [How you find out](#how-you-find-out-what-today-is)
below for every place the game tells you.
:::

---

### The seven Tides

There are seven Tides, one per weekday, running in a fixed weekly rotation. Each multiplies a
specific thing; everything it doesn't list stays untouched.

| # | Tide | What it does | Multipliers |
|---|------|---------------|-------------|
| 1 | **Tide of Diligence** | Every acting gain is doubled | Acting gain **x2.0** |
| 2 | **Hunting Tide** | Creatures spawn and drop more often; rare ingredients drop much more | Creature spawn **x2.0**, creature drops **x2.0**, Sequence 0-3 ingredient drops **x3.0** |
| 3 | **Tide of Fortune** | Chests are richer, pity arrives sooner | Chest loot **x2.5**, pity speed **x2.0** (half the opens), Sequence 0-3 loot weight **x2.5** |
| 4 | **Wild Tide** | More Wild Beyonders, and more can exist at once | Wild Beyonder spawn **x2.0**, Wild Beyonder cap **x2.0** |
| 5 | **Tide of Patience** | Acting cooldowns are halved | Acting cooldown **x0.5** (the one inverted key - lower is more generous) |
| 6 | **Deep Tide** | More mineable nodes, more foundable ingredients | Mineable nodes **x2.0**, foundable chance **x2.0**, Sequence 0-3 ingredient drops **x2.0** |
| 7 | **Crimson Tide** | A Crimson Moon is almost guaranteed tonight | Crimson Moon chance **x5.0** (still capped at 100%), creature drops **x1.5** |

The rotation runs in that exact order - Diligence, Hunting, Fortune, Wild, Patience, Deep, Crimson -
then loops back to Diligence. With seven entries it's effectively a weekly cycle, and the day's
window runs the full 24 hours.

A hard ceiling applies at the few places that stack several multipliers together - creature spawn
chance and acting gain both have a combined cap, so a Hunting Tide landing on top of a Crimson
Moon or Moon Authority buff doesn't compound into something absurd.

:::tip[Which Tide is actually worth chasing?]
It depends entirely on where you are. Diligence and Patience are opposite ends of the same
problem: early-to-mid Sequence characters are still bottlenecked by the acting *bar*, so doubled
gain helps them the most. Past Sequence 3 the bar usually isn't the limiter anymore - the long
active-time cooldown on each acting method is - so halving that cooldown on Patience day matters
far more to an endgame character than doubled gain ever will.

Hunting, Fortune, and Deep Tide all carry a sharper secondary bonus aimed specifically at
Sequence 0-3 ingredients and loot - that's the part worth saving your chest-opening and
ingredient-hunting for if you're near the endgame.
:::

:::caution[The creature-drop bonus is weaker than it looks]
The flat creature-drop multiplier on Hunting Tide and Crimson Tide is close to invisible on
MythicMobs-backed creatures. Those already drop at a high base rate with their chance capped at
100%, so they're already near-saturated before the Tide even applies - you'll feel the bonus
mainly on vanilla-backed creatures and on the genuinely rare Sequence 0-3 drops, not on every kill.
:::

One more caveat worth knowing if you're chasing Tide of Fortune's halved pity threshold
specifically: pity is only checked when you actually open a container. Cross the lowered
threshold late in the day and don't open one more chest before midnight, and the threshold just
reverts the next day - nothing about your progress is lost, you simply miss the window where it
would have paid out early.

---

### How you find out what today is

You should never have to guess. The game tells you, repeatedly, through several independent
channels:

- **Login card** - a chat card shown shortly after you join (timed to land after your join
  message, MOTD, church notices and bounty summary, never mid loading-screen), naming the Tide,
  its description, and time remaining.
- **coi-client toast** - if you're running the client mod, the same information also appears as a
  dismissible toast.
- **Periodic reminder** - a one-line chat reminder to everyone online every hour, skipping anyone
  who just joined or is currently AFK.
- **Boss bar** - a live countdown for the rest of the day, in its own bar slot separate from your
  spirituality bar.
- **Rollover title** - when the Tide changes, everyone online gets a title flash and a chime, plus
  a fresh chat card and toast.
- **`/coi tide status`** - full detail on demand: name, description, time remaining, and every
  multiplier it's carrying.
- **`/coi tide calendar [days]`** - the schedule ahead of time, today highlighted, so you can plan
  around a Tide that's still days away.

**Per-player opt-outs:** `/coi tide notify` mutes or unmutes the hourly reminder just for you, and
`/coi tide bar` hides or shows the boss bar just for you. Both default to on.

---

### Command surface

| Command | Effect |
|---|---|
| `/coi tide` | Alias for `status` |
| `/coi tide status` | Shows the active Tide, its effects, and time remaining |
| `/coi tide calendar [days]` | Lists the upcoming Tides starting today (default 14 days, up to 60) |
| `/coi tide notify` | Toggles your own hourly reminder on/off |
| `/coi tide bar` | Toggles your own boss bar on/off |

---

### What Tides never touch

A few systems are deliberately left completely untouched by the daily rotation:

| System | Why it's excluded |
|---|---|
| **[Uniqueness](/magic/uniqueness/) scoring** | Uniqueness is measured over a rolling 31-day window. Letting a Tide move it would make your score depend on *which* days you happened to play, not how much you played. |
| **[Usurpation](/magic/usurpation/) War Points and seat defense** | A War Point is meant to measure effort, not what that effort happened to be worth on a given calendar day. A doubled-gain Tide does **not** inflate War Points during a seat war - points are credited from the pre-Tide amount. |
| **Ordeals / Sealing** | These can destroy inventories outright. A calendar event should never make something that punishing more or less likely to land on you. |
| **Damage tuning** | Combat balance stays fixed regardless of which Tide is running. |

There is also one modifier that technically exists in the system but is deliberately left out of
the rotation entirely: it would raise the ceiling on how much [overflow acting](/magic/usurpation/)
a player can bank, which is competitive-adjacent enough that no shipped Tide is allowed to touch
it.

---

### Worth remembering

- **The schedule is a known quantity.** `/coi tide calendar` tells you what's coming - use it to
  time your week around the Tide that actually helps your current Sequence.
- **Every Tide is server-wide and identical for everyone**, so there's no advantage to timezone
  shopping - the rotation and the 24-hour window are the same across the whole network.
- **The endgame-relevant bonuses are narrow on purpose.** Only ingredients and loot at Sequence
  0-3 get the rare-tier multiplier; it exists to serve the late game without inflating the early
  one.
- **Nothing competitive is ever on the table.** Uniqueness, Usurpation War Points, Ordeals and
  damage balance are permanently out of scope for any Tide, scheduled or admin-forced.
