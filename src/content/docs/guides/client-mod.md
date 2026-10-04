---
title: "Client Mod"
description: "The optional coi-client Fabric mod: native menus, HUD overlays, gesture casting, and the loyalty bonus for running it"
sidebar:
  label: 🧩 Client Mod
  order: 15
  badge: "New!"
---

**coi-client** is an optional Fabric mod built specifically for Mysterria. It replaces the chest-GUI
menus and action-bar clutter of Circle of Imagination with proper HUD elements and native screens -
without changing a single thing about how the server plays.

:::note[Completely optional]
Nothing on the server requires this mod. Every screen it draws has a plain chest-GUI equivalent, and
if you don't install it (or play Bedrock via Geyser), you'll see those chest GUIs instead - exactly
what you get today.
:::

![The coi-client splash screen, with all 22 pathway icons orbiting the logo](https://in.ikeepcalm.me/mlqnpA3pPCPy.png)

---

### Getting it

The mod is Fabric-only (Java Edition). Grab the version matching your Minecraft client from any of:

- [GitHub Releases](https://github.com/ikeepcalm/coi-client/releases)
- [Modrinth](https://modrinth.com/mod/coi-client)
- [CurseForge](https://www.curseforge.com/minecraft/mc-mods/coi-client)

The server will remind you it exists shortly after you first join, and occasionally afterward if
you still don't have it.

---

### What it changes

With the mod installed and its features turned on, you get:

- **Native menus instead of chest GUIs** - your character sheet, ability list, map visibility, the
  Pantheon and Throne screens, and more open as proper windows instead of inventory grids.
- **A Beyonder character sheet** - Sequence, Spirituality, Madness, acting progress and its sources,
  all in one panel, with a **Beyonder dossier** showing your character's model, pose and background.
- **An ability selector and hotkeys HUD** - see your abilities, their cooldowns and costs, cast by
  category, and bind abilities to keys. The hotkeys HUD can be toggled off if you'd rather not see it.
- **A Beyonder healthbar** on whoever you're fighting, and a **movable spirituality bar** instead of
  the vanilla boss bar.
- **Resource bars** for ability reserves and charges that used to be glyph bars in your action bar.
- **Appearance traits** - physical changes certain pathways grant (for example Abyss's horns or
  Demoness's ears) render as real cosmetic traits.
- **Richer Ascension Ceremony visuals** and **Impact Frames** - an anime-style held frame for the
  game's biggest hits and moments.
- Smaller touches: sound effects on visual effects, hallucination effects at high Madness, a
  first-join tutorial walkthrough, and Discord Rich Presence.

The main menu opens on **M** by default, and you can bind a key to any individual screen - `L` straight
to your abilities, for example.

![The Beyonder character sheet as a native screen](https://in.ikeepcalm.me/0pKiY04Z8muN.png)

![The main menu, with every other screen reachable from it](https://in.ikeepcalm.me/nh3XKVKmJgub.png)

![The ability catalogue](https://in.ikeepcalm.me/qkcbjzwruKjG.png)

![The uniqueness screen](https://in.ikeepcalm.me/ui82oLhQZ25f.png)

![The Mythical Creature Form screen](https://in.ikeepcalm.me/T6GHRHkdh43V.png)

The ability selector groups your kit by pathway and sequence, and shows each spell's description,
type, category, spirituality cost and cooldown in place:

![The ability selector](https://in.ikeepcalm.me/RTN6DtdqySxe.png)

The character sheet HUD overlay replaces the separate madness, reserve and acting bars with one panel
carrying your skin, pathway and sequence:

![The character sheet HUD overlay](https://in.ikeepcalm.me/5z92kHSYi65y.png)

Every part of the HUD is movable - drag any element, including individual ability hotkeys, into the
layout you want:

![Dragging HUD elements into place](https://in.ikeepcalm.me/Xw8T62lAmv7C.gif)

Its settings screen is deliberately short, keeping only the options you would actually change:

![The mod's settings screen](https://in.ikeepcalm.me/qqcD1QcCKPqG.png)

![More of the mod's settings](https://in.ikeepcalm.me/pWRfUhAoEwja.png)

Every one of these falls back gracefully if you don't have the mod, have an outdated build, or turn
a feature off in the mod's own settings - nothing server-side depends on any of it being present.

---

### Gesture casting

Instead of binding abilities to keys one at a time, you can assign an ability to a premade shape and
cast it by drawing that gesture. It started with five shapes and more have been added since, so check
the mod's own settings for the current set. It's an alternative input method layered on top of the
hotkeys HUD - use whichever feels better to you.

---

### Native menus and `/coi menu native`

Native menus are on by default once the mod announces support for them. If you'd rather have the
old chest GUIs back - or the mod can't draw a given screen yet - run:

```
/coi menu native
```

This toggles your personal preference between the mod's own screens and the chest GUIs. The choice
is saved server-side, so it follows you even if you log in from a different client later.

---

### The loyalty bonus

Running a current build of the mod quietly pays off in acting progress:

- **+2% acting** from every source that feeds your digestion.
- **5% shorter cooldowns** on acting methods, so the same playtime buys more progress.

You'll see a short message confirming the bonus is active, and an occasional reminder if it isn't.
An outdated mod build that never completes its introduction to the server earns nothing - keep it
updated to keep the bonus.

:::tip[Not sure if it's working?]
The message you get on login and every so often afterward tells you plainly whether the bonus is
active, missing, or waiting on an update. If something still seems off, ask a staff member - they
can check what the server sees from your client.
:::
