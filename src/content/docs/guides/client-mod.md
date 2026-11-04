---
title: "Client Mod"
description: "The optional coi-client Fabric mod for Mysterria: native Beyonder menus, HUD, gesture casting, default keys and the +2% Acting bonus for using it."
sidebar:
  label: Client Mod
  order: 15
---

**coi-client** is an optional Fabric mod made for Mysterria. It replaces the chest menus and
action-bar clutter with native screens and HUD elements, and it gives a small Acting bonus.

Nothing on the server needs the mod. Every screen it draws has a chest-menu version, which you see
if you do not install it, play Bedrock through Geyser, run an outdated build or turn a feature off.

![The coi-client splash screen, with all 22 Pathway icons orbiting the logo](https://in.ikeepcalm.me/mlqnpA3pPCPy.png)

---

### Getting it

The mod needs Fabric on Java Edition. The latest version is **1.2.3**, built for Minecraft **26.2**.
Download it from [GitHub Releases](https://github.com/ikeepcalm/coi-client/releases),
[Modrinth](https://modrinth.com/mod/coi-client) or
[CurseForge](https://www.curseforge.com/minecraft/mc-mods/coi-client).

Every player gets a one-time message about the mod a few seconds after joining. After that, only
Beyonders get reminders, every 6 hours without the mod and every 72 hours with it to confirm the
bonus is working. The mod is close to essential for the full Ascension Ceremony visuals.

---

### What it changes

With the mod installed and its features turned on:

- Your character sheet, ability list, map visibility, the Pantheon and Throne screens and more open
  as **native windows** instead of inventory grids.
- The **character sheet** shows Sequence, Spirituality, Madness, Acting progress and its sources in
  one panel, with a **Beyonder dossier** of your character's model, pose and background.
- An **ability selector and hotkeys HUD** shows your abilities with their cooldowns and costs. You can
  cast by category and bind abilities to keys. The hotkeys HUD can be turned off.
- A **Beyonder health bar** shows your real Beyonder HP instead of plain hearts, in the styles Hearts +
  Numbers, Bar, Ornate Bar or Segments. PvP damage feedback is clearer, and a **movable Spirituality
  bar** replaces the vanilla boss bar. See [Health](/magic/health/).
- Hovering any Beyonder ingredient shows its Pathway, its Sequence, and whether it is a main or
  supplementary ingredient.
- **Resource bars** replace the glyph bars for ability reserves and charges in your action bar.
- Physical changes some Pathways grant, such as Abyss's horns or Demoness's ears, render as real
  cosmetic **appearance traits**.
- **Ascension Ceremony visuals** are richer, and **Impact Frames** add an anime-style held frame for
  the game's biggest hits.
- The **Pathway icon leaves your inventory**, and the Beyonder menu moves to **M**.
- You also get a toast with the day's [Daily Tide](/guides/tides/) when you log in, sounds on visual
  effects, hallucinations at high Madness, a first-join tutorial (replay it with **Show Tutorial
  Again** in the settings) and Discord Rich Presence.

### Default keys

| Key | Action |
|---|---|
| **M** | Open the Beyonder menu |
| **K** | Ability Bindings |
| **G** | Ability Wheel |
| **Left Alt** (hold) | Gesture casting |
| **Z, X, C, V, B, N** | Ability slots 1 to 6 |

Change them in Minecraft's Controls, where the mod has its own category. Keys that open single
screens directly, such as your abilities, exist too but are unbound until you set them.

![The Beyonder character sheet as a native screen](https://in.ikeepcalm.me/0pKiY04Z8muN.png)

![The main menu, with every other screen reachable from it](https://in.ikeepcalm.me/nh3XKVKmJgub.png)

![The ability catalogue](https://in.ikeepcalm.me/qkcbjzwruKjG.png)

![The Uniqueness screen](https://in.ikeepcalm.me/ui82oLhQZ25f.png)

![The Mythical Creature Form screen](https://in.ikeepcalm.me/T6GHRHkdh43V.png)

The ability selector groups your kit by Pathway and Sequence and shows each spell's description,
type, category, Spirituality cost and cooldown.

![The ability selector](https://in.ikeepcalm.me/RTN6DtdqySxe.png)

The character sheet HUD overlay replaces the separate Madness, reserve and Acting bars with one panel
that also shows your skin, Pathway and Sequence.

![The character sheet HUD overlay](https://in.ikeepcalm.me/5z92kHSYi65y.png)

You can drag every part of the HUD, including single ability hotkeys, into the layout you want.

![Dragging HUD elements into place](https://in.ikeepcalm.me/Xw8T62lAmv7C.gif)

The settings screen keeps only the options you are likely to change.

![The mod's settings screen](https://in.ikeepcalm.me/qqcD1QcCKPqG.png)

![More of the mod's settings](https://in.ikeepcalm.me/pWRfUhAoEwja.png)

---

### Gesture casting

Instead of hotkeys, you can assign an ability to a shape and cast it by drawing that shape while you
hold **Left Alt**. The **9 shapes** are circle, V, Z, line down, caret, triangle, square, hook and arc.

---

### Native menus and `/coi menu native`

Native menus are on by default once the mod is connected. To get the chest menus back, for example
when the mod cannot draw a screen yet, run this command.

```
/coi menu native
```

It switches between the mod's screens and the chest menus. The choice is saved on the server, so it
follows you to any client.

---

### The loyalty bonus

A current build of the mod gives **+2% [Acting](/magic/acting/)** from every source and **5% shorter
cooldowns** on Acting methods. A very old build that does not complete its handshake with the server
earns nothing, so keep the mod updated.

`/coi acting` names the Client Mod bonus when it is active. If something still seems off, ask a staff
member. They can check what the server sees from your client.
