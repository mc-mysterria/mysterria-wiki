---
title: "Beverages"
description: "Master the art of brewing: cauldrons, aging barrels, distillation, and custom recipes"
sidebar:
  label: 🍺 Beverages
  order: 12
  badge: "New!"
---

![Helpful image](../../../assets/brewery/beverages.png)

### What is the Brewery?

The **Brewery** system introduces a fermentation and aging process to the server. You can now craft standard alcoholic
drinks, specialty coffees, and powerful **nourishing beverages** that grant saturation to completely replace solid food.

However, excess drinking leads to stumbling, distorted speech, scrambled signs, and severe hangovers!

---

### How it Works

The path from raw ingredients to a perfect 5-star bottle follows four distinct phases:

- **Ferment** - Boil ingredients in a heated cauldron for a specific time and gather them in glass bottles.
- **Distill** - Put the mixture through a brewing stand with Glowstone Dust to concentrate the alcohol (only for
  high-proof spirits).
- **Age** - Store the bottles in custom-built wooden barrels to mature over several Minecraft "years".
- **Seal** - Place the finished bottle in a Brew Sealing Table to freeze its quality and age forever.

---

### Boiling

Every brew begins in a boiling cauldron.

1. Place a cauldron filled with water over a heat source (e.g., Campfire, fire, magma, or lava).
2. Right-click the cauldron with ingredients. Check the recipe details for exact quantities.
3. Right-click the boiling cauldron with a **Clock** to see how long the ingredients have been cooking.
4. The bubble particles rising from the cauldron change color over time. Watch them closely to time your recipes without
   a clock!
5. Once boiling is complete, right-click the cauldron with empty **Glass Bottles** to extract the base mixture.

---

### Distillation

Hard liquors and spirits require distillation to purify the flavor and boost the proof.

1. Place your cauldron-boiled bottles into the bottom three slots of a standard **Brewing Stand**.
2. Put **Glowstone Dust** in the top ingredient slot. The dust acts as a filter and is consumed as the brew distills.
3. Each pass through the brewing stand counts as one "distill run". Be precise - over-distilling will ruin the quality
   or turn the brew into a ruined potion.

---

### Barrel Aging

Aging mature drinks changes their description, improves quality, and adds unique flavor profiles based on the wood type
of the barrel.

The wood type of the barrel dictates the aging characteristics. A recipe requiring Spruce barrel aging will only reach
maximum quality inside a barrel constructed entirely of Spruce wood. Brews mature over Minecraft "years" (each year
takes **20 real-world minutes**). Brews will automatically age while sitting inside a registered barrel's inventory.

---

### Barrel Structures

You can build two different sizes of barrels using any of the 13 available wood types.

![Helpful image](../../../assets/brewery/barrels.webp)

#### Small Barrel (Holds 9 Brews)

1. Place 4 wooden stairs of your choice in a 2x2 square on the ground (facing inward).
2. Place another 4 stairs directly on top of them (facing inward), forming a hollow 2x2x2 block.
3. Place a sign on the front and write `barrel` on the first line.
4. Right-click the sign to register. You should see `Barrel created!` in chat.

#### Large Barrel (Holds 27 Brews)

1. Place 4 fence posts on the ground to serve as the corners/legs of a 3x3x4 cylinder.
2. Build the horizontal cylinder (3 blocks wide, 4 blocks long):
    - **Bottom Layer:** 4 stairs on the left, 4 stairs on the right, 4 planks down the center.
    - **Middle Layer:** 4 planks on the left, 4 planks on the right, 1 plank at the front-center, and 1 plank at the
      back-center (leave the core hollow).
    - **Top Layer:** 4 stairs on the left, 4 stairs on the right, 4 planks down the center.
3. Place a fence post on the bottom-middle plank of the front face (this acts as the spigot).
4. Place a sign directly above the spigot (middle-middle plank) and write `barrel` on the first line.
5. Right-click the sign to register.

---

### The Sealing Table

Unsealed brews will keep aging in your inventory or storage. To lock a brew's quality and stop the aging process, you
must seal it.

The Sealing Table uses a **Smoker** block. Craft it by placing **2 Glass Bottles** on the top row of a crafting table
and **4 Wood Planks** below them. Put your finished brew inside the Sealing Table interface and click to seal it. Sealed
brews are ideal for shops and long-term storage.

---

### Drunkenness & Hangover Mechanics

Consuming alcoholic beverages increases your drunkenness percentage, triggering custom behavioral changes:

1. **Stumbling:** Your character will lose control of their footing and stumble in random directions.
2. **Drunk Speech:** Your chat messages are distorted. S letters become `sh`, words get mixed up, and you will randomly
   hiccup (`*hic*`) or burp (`*burp*`).
3. **Drunk Signs:** Trying to write on signs while drunk results in garbled, misspelled text.
4. **Vomiting:** If your alcohol level is too high, you will throw up, dropping uncollectable items like `SOUL_SAND`,
   `ROTTEN_FLESH`, and `BEETROOT` on the floor.
5. **Waking Up:** Logging out while extremely drunk will cause your character to "wake up" at a random coordinate in the
   world, unable to remember how they got there!

#### Sobering Up

To quickly lower your drunkenness percentage or cure a hangover, consume one of the following:

| Item            | Effect                                                           |
|:----------------|:-----------------------------------------------------------------|
| 🍎 Golden Apple | Drastically reduces alcohol levels by **10** (the ultimate cure) |
| 🍞 Bread        | Soaks up the alcohol, reducing levels by **4**                   |
| 🍯 Honey Bottle | Soothes the stomach, reducing levels by **3**                    |
| 🥛 Milk Bucket  | Neutralizes toxins, reducing levels by **2**                     |
| 🧪 Water Bucket | Hydrates your system, reducing levels by **2**                   |
| 🥕 Carrot       | Light snack that reduces levels by **2**                         |

---

### The Recipe Book

Below are the official recipes. Pay close attention to ingredients, boiling times, distillation runs, barrel aging, and
aging times to achieve a **5-star Quality** rating! A "-" in the **Aging** column means the brew is bottled and
ready immediately, with no barrel time required.

#### 🌾 Saturation & Food-Replacing Brews

These beverages are packed with nutrients and grant the **Saturation** effect, allowing you to bypass eating solid food
entirely.

| Name                    | Ingredients                                                       | Boil Time | Distill Runs |    Aging     | Potion Effects                                                | Description                                                                    |
|:------------------------|:------------------------------------------------------------------|:---------:|:------------:|:------------:|:--------------------------------------------------------------|:-------------------------------------------------------------------------------|
| **Dwarven Stout**       | 8 Wheat, 4 Sweet Berries, 1 Coal                                  |  10 mins  |      0       |   Oak (6y)   | Saturation I-II<br>Resistance I (1-2m)<br>Slowness I (15s)    | A heavy, smoky stout that tastes of earth and hearth. Extremely filling.       |
| **Liquid Bread**        | 4 Bread, 4 Wheat, 2 Sugar                                         |  6 mins   |      0       |  Birch (2y)  | Saturation II-III<br>Regeneration I (10-30s)                  | The ultimate survival drink, favored by fasting monks. Literally liquid bread. |
| **Elven Honeymead**     | 8 Sugar Cane, 2 Honey Bottles, 4 Melon Slices                     |  5 mins   |      0       | Acacia (15y) | Saturation II<br>Speed I (1-2m)<br>Regeneration I-II (10-20s) | Sweet as liquid sunlight. Can sustain a traveler for days in the wilderness.   |
| **Golden Feast Elixir** | 2 Golden Carrots, 1 Glowstone Dust, 6 Sweet Berries, 4 Sugar Cane |  12 mins  |      1       | Spruce (10y) | Saturation IV-V<br>Glowing I (60s)<br>Speed I-II (30-60s)     | A shimmering, magical golden broth that cures even extreme hunger.             |

#### 🤪 Chaotic & Funny Brews

These drinks have unique, funny, or chaotic side effects that make player interactions hilarious.

| Name                       | Ingredients                                                 | Boil Time | Distill Runs |     Aging     | Potion Effects                                                                                   | Description                                                                         |
|:---------------------------|:------------------------------------------------------------|:---------:|:------------:|:-------------:|:-------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------------------|
| **Gnomish Giddy Juice**    | 2 Red Mushrooms, 2 Brown Mushrooms, 4 Glow Berries, 4 Sugar |  4 mins   |      2       |   Oak (1y)    | Saturation I<br>Nausea I-II (20-40s)<br>Jump Boost II-IV (30-60s)<br>Glowing I (30s)             | A bubbly, glowing pink concoction. Makes you jump high and feel incredibly giddy!   |
| **Pirate's Grog**          | 6 Kelp, 10 Sugar Cane, 6 Melon Slices                       |  8 mins   |      2       | Dark Oak (5y) | Saturation I-II<br>Water Breathing I (1-2m)<br>Hero of the Village I (30s)                       | Spicy, salty grog that keeps the scurvy away and makes you feel like a pirate king. |
| **Glowing Mushroom Vodka** | 10 Potatoes, 3 Red Mushrooms, 3 Brown Mushrooms             |  18 mins  |      5       |       -       | Weakness (80s)<br>Nausea (27s)<br>Night Vision (50-80s)<br>Blindness (2-12s)<br>Slowness (3-10s) | A psychedelic brew. Literally glows in the dark and distorts reality.               |

#### 🍺 Classic Beers & Ales

| Name          | Ingredients | Boil Time | Distill Runs |     Aging     | Lore / Description           |
|:--------------|:------------|:---------:|:------------:|:-------------:|:-----------------------------|
| **Wheatbeer** | 3 Wheat     |  8 mins   |      0       |  Birch (2y)   | Refreshing and crisp.        |
| **Beer**      | 6 Wheat     |  8 mins   |      0       |   Any (3y)    | The traditional pub ale.     |
| **Darkbeer**  | 6 Wheat     |  8 mins   |      0       | Dark Oak (8y) | Roasted, deep, malty flavor. |

#### 🍇 Wines, Meads & Ciders

| Name            | Ingredients            | Boil Time | Distill Runs |   Aging   | Potion Effects         | Description                                         |
|:----------------|:-----------------------|:---------:|:------------:|:---------:|:-----------------------|:----------------------------------------------------|
| **Red Wine**    | 5 Sweet Berries        |  5 mins   |      0       | Any (20y) | None                   | Full-bodied, requires deep barrel aging.            |
| **Mead**        | 6 Sugar Cane           |  3 mins   |      0       | Oak (4y)  | None                   | Classic honey-like wine.                            |
| **Apple Mead**  | 6 Sugar Cane, 2 Apples |  4 mins   |      0       | Oak (4y)  | Water Breathing (150s) | Sweet apple mead that helps you breathe underwater. |
| **Apple Cider** | 14 Apples              |  7 mins   |      0       | Any (3y)  | None                   | Sweet, refreshing apple cider.                      |

#### 🥃 Spirits & Liquors

High-alcohol drinks that require distillation:

| Name                        | Ingredients                      | Boil Time | Distill Runs |    Aging     | Potion Effects                                                | Description                                                 |
|:----------------------------|:---------------------------------|:---------:|:------------:|:------------:|:--------------------------------------------------------------|:------------------------------------------------------------|
| **Calvados (Apple Liquor)** | 12 Apples                        |  16 mins  |      3       | Acacia (6y)  | None                                                          | Sour like acid at worst, a premium brandy at best.          |
| **Scotch Whiskey**          | 10 Wheat                         |  10 mins  |      2       | Spruce (18y) | None                                                          | A single-malt whiskey with deep wood notes.                 |
| **Golden Rum**              | 18 Sugar Cane                    |  6 mins   |      2       |  Oak (14y)   | Fire Resistance (20-100s)<br>Poison (0-30s)                   | Warm spiced gold rum that grants temporary fire protection. |
| **Russian Vodka**           | 10 Potatoes                      |  15 mins  |      3       |      -       | Weakness (15s)<br>Poison (10s)                                | A harsh potato spirit. Almost undrinkable at poor quality.  |
| **Old Tom Gin**             | 9 Wheat, 6 Blue Flowers, 1 Apple |  6 mins   |      2       |      -       | None                                                          | Infused with the delicate taste of juniper.                 |
| **Tequila Anejo**           | 8 Cactus                         |  15 mins  |      2       | Birch (12y)  | None                                                          | Spirit of the desert, aged in birch wood.                   |
| **Strong Absinthe**         | 15 Grass                         |  3 mins   |      6       |      -       | Poison (15-25s)                                               | High-proof herbal liquor. Highly toxic but powerful.        |
| **Green Absinthe**          | 17 Grass, 2 Poisonous Potatoes   |  5 mins   |      6       |      -       | Poison (25-40s)<br>Instant Damage II<br>Night Vision (40-60s) | A poisonous-looking lime green liquor. Distorts vision.     |
| **Golden Vodka**            | 10 Potatoes, 2 Gold Nuggets      |  18 mins  |      3       |      -       | Weakness (28s)<br>Poison (4s)                                 | Shimmering golden vodka.                                    |
| **Blazing Whiskey**         | 10 Wheat, 2 Blaze Powder         |  12 mins  |      3       | Spruce (18y) | None                                                          | Gives a burning feeling in your mouth when drunk!           |

#### ☕ Specialty & Sobering Brews

These beverages are non-alcoholic or help sober up drunk players.

| Name                  | Ingredients                           | Boil Time | Distill Runs |   Aging   | Potion Effects                                         | Description                                          |
|:----------------------|:--------------------------------------|:---------:|:------------:|:---------:|:-------------------------------------------------------|:-----------------------------------------------------|
| **Potato Soup**       | 5 Potatoes, 3 Grass                   |  3 mins   |      0       |     -     | Instant Health I                                       | Hot nourishing soup, restores health.                |
| **Strong Coffee**     | 12 Cocoa Beans, 2 Milk Buckets        |  2 mins   |      0       |     -     | Speed (30-140s)<br>Regeneration (2-5s)<br>Alcohol: -6% | Perfect for clearing your head and sober up quickly. |
| **Advocaat (Eggnog)** | 5 Eggs, 2 Sugar, 1 Milk Bucket        |  2 mins   |      0       | None (3y) | None                                                   | Creamy egg liquor.                                   |
| **Hot Chocolate**     | 3 Cookies                             |  2 mins   |      0       |     -     | Haste (40s)                                            | Hot sugary cocoa that gives you energy to mine.      |
| **Iced Coffee**       | 8 Cookies, 4 Snowballs, 1 Milk Bucket |   1 min   |      0       |     -     | Speed (10s)<br>Regeneration (30s)<br>Alcohol: -8%      | The best drink to sober up fast. Cold and sweet.     |

:::note[Ingredient note]
"Blue Flowers" refers to Cornflowers or Blue Orchids.
:::

---

:::tip[Tips for Success]

- **Read the Hints** - If your brew is ruined, hover over it. The tooltip contains diagnostic hints like
  `Too much time in the oven...` or `One of the ingredients doesn't taste good...` to help you fix your mistakes.
- **Double Check Wood Types** - Make sure the barrel structure is built entirely of the required wood type (e.g.
  Spruce, Oak) so your high-quality recipes age correctly.
- **Seal Your Masterpieces** - Always use the Brew Sealing Table on your finished 5-star brews before placing them in
  player shops or storing them.
  :::
