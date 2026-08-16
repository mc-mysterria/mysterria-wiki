---
title: "Agora"
description: "The underground market - secret entrances, anonymous trading, stalls and couriers"
sidebar:
  label: 🕯️ Agora
  order: 13
  badge: "New!"
---

The **Agora** is the market that isn't on any map. It lies beneath the world, reachable only through hidden doors, and
it is where players trade with players - without ever meeting, and without ever knowing each other's names.

There are **no commands** for the Agora. Everything happens in person: you walk through a door, and you talk to the
people who work there.

---

## Getting In

### Craft a Secret Entrance

```
O E O        O - Obsidian
E D E        E - Echo Shard
O E O        D - Dark Oak Door
```

![Obsidian and echo shards arranged around a dark oak door in a crafting grid](../../../assets/agora/door_craft.png)

### Place It

Right-click a block with the entrance in hand. A few conditions:

- The spot needs **two blocks of free space** above it.
- It must be inside a **town's claimed land**, and you must be **trusted** there.
- **One entrance per land** - a land that already hides a door will refuse a second.

The wall shivers, and your door appears. Right-click it to descend.

Don't want to build one? The server keeps a **public entrance** at coordinates `(0, 0)`, and anyone may use it.

### A Secret, Not a Lock

Anyone who finds your door can walk through it. Hide it well.

The door itself is safe - it can't be broken, blown up, or moved. The only way to be rid of one is to unclaim the land
it stands on: the door goes with the claim. That is also how you relocate it - unclaim the chunk, claim it again
afterwards, and place a fresh entrance wherever you'd rather have it. The old door never comes back, so moving means
crafting again.

### Getting Back Out

Find the **exit door** and right-click it. You'll surface at the exact spot where you went down.

---

## Inside the Agora

- Nobody can be hurt down here. No PvP, no mobs, no fall damage, no explosions, no fire.
- Your inventory is your own. Nothing is taken from you at the door, in either direction.
- You can't build or open containers anywhere in the market - unless you're standing in a [stall](#stalls) you rent.

---

## Who You'll Meet

Right-click anyone to talk to them.

| Who               | What for                              |
|-------------------|---------------------------------------|
| **The Fence**     | Put your goods up for sale            |
| **Bazaar Clerk**  | Browse and buy                        |
| **The Informant** | Search by Pathway and Sequence        |
| **Ledger Keeper** | Collect your purchases and your money |
| **Courier Post**  | Have purchases delivered to you       |
| **Plot Warden**   | Rent a stall                          |
| **Stall Keeper**  | A renter's own storefront             |
| **Quartermaster** | The ordinary shop, moved underground  |

![The Fence waiting behind his counter in the Agora](../../../assets/agora/fence.png)

---

## Money

Everything down here is counted in three coins:

| Coin          | Worth                      |
|---------------|----------------------------|
| **Coppet**    | The smallest coin          |
| **Lick**      | 64 coppets                 |
| **V'erl Dor** | 64 Licks, or 4,096 coppets |

Prices are quoted in whichever mix reads shortest - `16 coppets 11 licks` rather than 720 coppets. Where you type a
price yourself, the shorthand is `c` for coppets, `l` for Licks and `v` for V'erl Dor.

---

## Selling

Hand your item to the **Fence** and name a price. He'll appraise it first and suggest what he thinks it's worth -
Beyonder materials are judged by their Sequence, ordinary goods by what similar things have been selling for. It's only
advice. The price is yours.

| Rule                 | Value                                                |
|----------------------|------------------------------------------------------|
| Listing fee          | **2%** of your price (at least 1 coppet)             |
| Sale tax             | **8%** of the sale                                   |
| Price range          | 1 coppet – 1,000,000 coppets (244 V'erl Dor 9 Licks) |
| New listings per day | **5**                                                |
| Active at once       | **15**                                               |
| Listing lasts        | **72 hours**                                         |

The listing fee is paid **up front** and never comes back - not if it sells, not if it expires, not if you cancel. Price
things carefully.

![The Fence appraising an Echo Shard at 5 coppets](../../../assets/agora/selling.png)
![The Fence appraising a Sequence 5 ingredient at 16 coppets 11 licks](../../../assets/agora/selling_coi.png)

**Some things can't be sold:** shulker boxes, bundles, or anything else that holds items; bedrock; and items bound to
you.

### When Something Sells

You won't be told what, or for how much - only that a coin has been set aside in your name. Counting it is the Ledger
Keeper's job, and you'll have to go and see him.

Sales made while you were offline are waiting for you when you log back in.

### When It Doesn't

After 72 hours an unsold listing expires and the item goes to your **stash**. Cancel a listing early and it goes to the
same place. Either way, you get it back.

---

## Buying

The **Bazaar Clerk** shows you everything on offer. The **Informant** is for when you know exactly what you're after -
search by Pathway and Sequence.

<!-- ![Helpful image](../../../assets/agora/browse.png) -->

You pay the price on the label and nothing on top - the tax comes out of the seller's share, not yours. You can't buy
your own listing.

Purchases **don't go into your inventory**. They wait for you at the Ledger Keeper, unless you've hired
a [courier](#couriers).

---

## Collecting Your Things

Whatever the market owes you sits with the **Ledger Keeper** until you come for it. It never expires, and it never
arrives on its own.

<!-- ![Helpful image](../../../assets/agora/ledger.png) -->

**Your stash** holds items: things you bought, listings that expired, listings you cancelled, and anything rescued from
a stall you lost. Take as much as your inventory has room for - the rest stays safe.

**Your ledger** holds money: every sale you've made, and what it earned you after tax. Collecting pays out everything
owed at once.

---

## Couriers

Tired of walking back down for every purchase? Bring a **summoning horn** to the **Courier Post** and leave it there.
From then on, everything you buy is delivered straight to you.

One horn at a time. Take it back whenever you like, and deliveries stop.

---

## Stalls

A **stall** is a room in the market you can rent, build in, and sell from. Speak to the **Plot Warden** to take one.

![The stall district of the Agora, lit by lanterns](../../../assets/agora/plots.png)

| Rule              | Value                            |
|-------------------|----------------------------------|
| Rent              | **5 V'erl Dor** (20,480 coppets) |
| Period            | **7 days**                       |
| Stalls per player | **1**                            |
| Grace period      | **48 hours**                     |

While your rent is paid you can build, break, and use chests **inside your stall**. A **Stall Keeper** appears at your
storefront - visitors clicking it see what you have for sale, and you clicking it get your own counter.

### Keeping It

Pay the Plot Warden again before the week runs out to renew for another one. Miss it, and you get **48 hours of
grace** - you keep everything, but you'll be reminded.

### Losing It

After that you're evicted, but **nothing is destroyed**. Everything in your chests, your item frames, your armor
stands, anything left on the floor - it all goes to your stash at the Ledger Keeper, and the room is reset for the next
tenant.

You can also hand a stall back early from the Plot Warden's menu.

---

## Stall Counters

Inside your own stall you can set up **counters** - a sign on a chest that sells to anyone walking past, with no listing
fee and no waiting. Up to **12 per stall**.

<!-- ![Helpful image](../../../assets/agora/counter.png) -->

1. Put a chest down, and a sign on it - on its face or on top.
2. **Line 1:** `[Market]`
3. **Line 2:** the price - a plain number of coppets, or shorthand like `3v 12l 5c` (3 V'erl Dor, 12 Licks and 5
   coppets - 13,061 coppets in all).
4. **Line 3** *(optional)*: how many items per purchase, 1–64. Leave blank for 1.
5. **Right-click the sign holding the item you want to sell.**

The sign redraws itself with the item, the price, and your name.

| Action                      | Result                      |
|-----------------------------|-----------------------------|
| Right-click holding an item | Set or change what it sells |
| Right-click empty-handed    | Check stock and total sold  |
| Sneak + right-click         | Close the counter           |

**The chest is your stock.** Restocking means putting more in; when it's empty, the counter is sold out. To change a
price, break the sign and set it up again.

**To buy:** right-click the sign once for the price, then **again within 6 seconds** to pay. The items go straight into
your hands.

Counters end with the sign, the chest, or the stall.

---

## What It Costs

| What             | Cost                                |
|------------------|-------------------------------------|
| Secret entrance  | Obsidian, echo shards, a door       |
| Listing an item  | 2% of your price (min 1 coppet)     |
| Selling an item  | 8% of the sale                      |
| Buying an item   | The price on the label              |
| Renting a stall  | 5 V'erl Dor (20,480 coppets) a week |
| Courier delivery | Free - the horn is the price        |

---

## Worth Remembering

- **Nobody knows who you are.** Listings carry no name. That's the whole point.
- **Nothing comes to you.** Purchases and earnings wait at the Ledger Keeper until you fetch them - or a courier does it
  for you.
- **Nothing is lost.** Expired, cancelled, evicted - it all ends up in your stash.
- **The listing fee is gone the moment you list.** Think before you price.
