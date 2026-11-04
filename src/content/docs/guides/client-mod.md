---
title: "Client Mod"
description: "The optional coi-client Fabric mod for Mysterria: native Beyonder menus, HUD, gesture casting, default keys and the +2% acting bonus for using it."
sidebar:
  label: Client Mod
  order: 15
---

**coi-client** is an optional Fabric mod built specifically for Mysterria. It replaces the chest-GUI
menus and action-bar clutter of Circle of Imagination with proper HUD elements and native screens -
without changing how the server plays.

:::note[Completely optional]
Nothing on the server requires this mod. Every screen it draws has a plain chest-menu equivalent, and
if you don't install it (or play Bedrock through Geyser), you see those chest menus instead.
:::

![The coi-client splash screen, with all 22 pathway icons orbiting the logo](https://in.ikeepcalm.me/mlqnpA3pPCPy.png)

---

### Getting it

The mod needs Fabric (Java Edition). The latest version is **1.2.3**, built for Minecraft **26.2**. Download it from any of:

- [GitHub Releases](https://github.com/ikeepcalm/coi-client/releases)
- [Modrinth](https://modrinth.com/mod/coi-client)
- [CurseForge](https://www.curseforge.com/minecraft/mc-mods/coi-client)

Every player gets a one-time message about the mod a few seconds after joining. After that, only
Beyonders get reminders: every 6 hours without the mod, and every 72 hours with it (to confirm the
bonus is working). The mod is close to essential if you want to see the full Ascension Ceremony visuals.

---

### What it changes

With the mod installed and its features turned on, you get:

- **Native menus instead of chest GUIs**: your character sheet, ability list, map visibility, the
  Pantheon and Throne screens, and more open as proper windows instead of inventory grids.
- **A Beyonder character sheet**: Sequence, Spirituality, Madness, acting progress and its sources,
  all in one panel, with a **Beyonder dossier** showing your character's model, pose and background.
- **An ability selector and hotkeys HUD**: see your abilities, their cooldowns and costs, cast by
  category, and bind abilities to keys. The hotkeys HUD can be toggled off if you'd rather not see it.
- **A Beyonder health bar** that shows your real Beyonder HP instead of plain hearts (styles: Hearts +
  Numbers, Bar, Ornate Bar, Segments), clearer PvP damage feedback, and a **movable Spirituality bar**
  instead of the vanilla boss bar. See [Health](/magic/health/).
- **An ingredient identifier:** hover any Beyonder ingredient to see its Pathway, its Sequence, and
  whether it is a main or supplementary ingredient.
- **Resource bars** for ability reserves and charges that used to be glyph bars in your action bar.
- **Appearance traits**: physical changes certain pathways grant (for example Abyss's horns or
  Demoness's ears) render as real cosmetic traits.
- **Richer Ascension Ceremony visuals** and **Impact Frames**: an anime-style held frame for the
  game's biggest hits and moments.
- **No Pathway icon in your inventory.** The mod frees that slot; the Beyonder menu is on **M** instead.
- Smaller touches: a toast showing the day's [Daily Tide](/guides/tides/) when you log in, sound effects on visual
  effects, hallucination effects at high Madness, a first-join tutorial (replay it with **Show Tutorial
  Again** in the settings), and Discord Rich Presence.

### Default keys

| Key | Action |
|---|---|
| **M** | Open the Beyonder menu |
| **K** | Ability Bindings |
| **G** | Ability Wheel |
| **Left Alt** (hold) | Gesture casting |
| **Z, X, C, V, B, N** | Ability slots 1 to 6 |

You can change them in Minecraft's Controls, where the mod has its own category. Keys for opening
single screens directly (for example your abilities) exist too, but are unbound until you set them.

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

Every part of the HUD is movable. Drag any element, including individual ability hotkeys, into the
layout you want:

![Dragging HUD elements into place](https://in.ikeepcalm.me/Xw8T62lAmv7C.gif)

Its settings screen is deliberately short, keeping only the options you would actually change:

![The mod's settings screen](https://in.ikeepcalm.me/qqcD1QcCKPqG.png)

![More of the mod's settings](https://in.ikeepcalm.me/pWRfUhAoEwja.png)

Every one of these falls back gracefully if you don't have the mod, have an outdated build, or turn
a feature off in the mod's own settings. Nothing on the server depends on any of it being present.

---

### Gesture casting

Instead of binding abilities to keys one at a time, you can assign an ability to a shape and cast it
by drawing that shape while you hold **Left Alt**. There are **9 shapes**: circle, V, Z, line down,
caret, triangle, square, hook and arc. It is an alternative to the hotkeys, so use whichever feels
better.

---

### Native menus and `/coi menu native`

Native menus are on by default once the mod is connected. If you would rather have the chest menus
back, or the mod cannot draw a screen yet, run:

```
/coi menu native
```

This switches between the mod's own screens and the chest menus. The choice is saved on the server,
so it follows you to any client.

---

### The loyalty bonus

Running a current build of the mod pays off in acting progress:

- **+2% acting** from every source. See [Acting](/magic/acting/).
- **5% shorter cooldowns** on acting methods, so the same playtime buys more progress.

`/coi acting` shows whether the bonus is active. A very old build that does not complete its
handshake with the server earns nothing, so keep the mod updated.

:::tip[Not sure if it's working?]
Run `/coi acting`: it names the client-mod bonus when it is active. If something still seems off,
ask a staff member. They can check what the server sees from your client.
:::
