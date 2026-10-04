---
title: "Acting Overflow and the Usurpation"
description: "Spending banked overflow acting to contest a pathway's uniqueness or a seat in a full Sequence bracket"
sidebar:
    label: ⚔️ Usurpation
    order: 15
    badge: "New!"
---

![Acting overflow and the Usurpation](https://in.ikeepcalm.me/IaAGV6FxcMUF.webp)

### The seat is the potion

Beyonder characteristics are conserved. There are only so many seats at each Sequence, and
winning one someone else already holds means they lose theirs. Once your [acting](/magic/acting/)
bar is completely full, the acting you keep earning doesn't go to waste - it banks as
**overflow**, and overflow is the currency you spend to contest something someone else already
holds: a pathway's [uniqueness](/magic/uniqueness/), or a seat in a full Sequence bracket.

---

### Overflow acting - the currency

Overflow only banks while your pathway sits at Sequence 4 or lower. Above that, any acting past a
full bar is simply wasted, the same as before this system existed.

| Rule | Value |
|---|---|
| Banks only up to Sequence | **4** |
| Bank ceiling | **3.5x** your current bar |
| Weekly caps reset | Monday 00:00 UTC |

Each source of acting can only bank so much overflow per week, expressed as a percent of your bar:

| Source | Weekly cap |
|---|---|
| Ability gameplay | 40% |
| World content | 40% |
| Player interaction | 25% |
| Stolen acting | 25% |
| Events | 25% |
| Passive / AFK | 5% |
| Acting bottles | **0%** |

Acting bottles are tradeable and farmable - they're there to fill your bar, not to mint seat
currency, so they never bank a cent of overflow no matter how many you drink.

Overflow is not acting. It never counts toward your advancement percentage and never shows up in
your bar - check your bank separately with `/coi acting status`, in the Beyonder menu's pathway
lore, or on the acting action bar once your bar is already full.

:::note[Switched pathways recently?]
A pathway reached sideways - a potion switch, a free transfer, a takeover - rather than walked
from Sequence 9 is **foreign** to you, and foreign pathways settle in before they can be used to
challenge anything. See [Foreign-pathway settling](#foreign-pathway-settling) below.
:::

---

### Contesting a uniqueness

Spend overflow to force an immediate head-to-head re-score against whoever currently holds the
pathway's [uniqueness](/magic/uniqueness/). There's no war phase - it resolves the moment you
commit.

**To challenge, you need to:** walk that pathway at or below the auto-uniqueness minimum
Sequence, hold no uniqueness yourself, not be opted out of the uniqueness system or blacklisted,
and the pathway must currently be held by someone else, not locked, not already on cooldown, with
no other challenge already pending against it.

| Knob | Value |
|---|---|
| Minimum stake | 50% of your bar |
| Maximum useful stake | 100% of your bar |
| Score multiplier | `1 + 0.005 x percent staked` - **x1.25** at the 50% minimum, **x1.5** at 100% (the cap) |
| Result | strict win required - a tie favors the holder |
| Burn on a lost challenge | 50% of your stake; the rest returns to your bank |
| Cooldown | 7 days on that pathway after any resolved challenge, win or lose |

Both of you are scored on the same engine behind automatic uniqueness selection, and the holder
keeps their accommodation bonus - your stake buys an edge against a real defensive advantage, not
a free win. A floor on how close your raw, unboosted score must already be to the holder's also
applies, so stake alone can't carry a challenger who isn't already close.

If the challenge can't reach a fair verdict for any reason - the holder loses eligibility
mid-resolution, you stop being eligible, the server restarts before it resolves - your stake is
refunded in full with no cooldown.

---

### Contesting a seat

A seat challenge targets a full Sequence bracket, not a named player. You need to already have
**everything** advancement requires and be blocked by nothing except the bracket being full.

**Readiness checklist:**

| Check | What it means |
|---|---|
| Bracket full | Every seat at the next Sequence is already taken |
| Acting at 100% | Full bar on that pathway |
| Rituals complete | All of them |
| Potion in hand | The actual next-Sequence potion, in your inventory |
| Progression limiter | Not blocking you |
| Bracket cooldown | Clear - **14 days** since anything last resolved against this bracket |
| Bank covers the bid | You have enough overflow banked |

Sequence 0 can never be contested this way - its single seat only opens through the
[Sequence Zero](/magic/sequence-zero/) ascension gate, never through a bid.

:::caution[Your potion goes into escrow the moment you bid]
A contest runs far longer than an unprotected potion would last, so the potion you bid with is
taken out of your inventory and held for the whole contest, its expiry timer frozen while it
waits. It comes back to you - with a fresh clock - on every ending except a win: being outbid, the
contest falling through, losing the war, or withdrawing. If you're offline when that happens, it's
waiting for you at your next login. The only way it's ever consumed is by drinking it into the
seat you actually won.
:::

**Cost:**

```
bid = your bar x 1.75 x 1.5^(recent losses) x (0.5 if you're on a deposed rematch)
```

| Knob | Value |
|---|---|
| Base bid | 1.75x your current bar |
| Escalation per recent loss | x1.5, decaying after 60 days |
| Deposed rematch discount | half price, for 60 days after being deposed |
| Burn on a lost war | 50% of your bid |

#### How it plays out

**1. Declaration window (48 hours).** Every bid is paid the moment it's placed. When the window
closes, the highest bid is the one that enters the contest and everyone else is refunded in full -
a seat can't be quietly handed to a friend by outbidding and then withdrawing.

**2. Nomination.** You're not challenging a specific player - the bracket nominates whichever
current holder has the lowest Defense Score:

| Component | Weight |
|---|---|
| Playtime (best 31 days of the last 60) | 40% |
| Church religion score | 25% |
| Uniqueness accommodation | 15% |
| Ability casts, last 31 days | 20% |

Playtime is scored over your **best** 31-day stretch inside a 60-day lookback, not just the
trailing 31 days - so taking a two-week break doesn't automatically make you the bracket's weakest
holder and the default nomination target.

A holder with less than **3 hours** of total playtime across the trailing **45 days** is judged
inactive and the seat is simply taken, no war fought at all. That judgment isn't just "have they
logged in" anymore - it checks actual playtime across that window, specifically to stop a
two-minute login once a month from keeping a functionally dead account's seat safe forever. It's a
deliberately low bar - a few minutes a day clears it - since it exists to retire abandoned
accounts, not to punish people who simply play less.

**3. War Week.** The war runs for **7 contested days** - a day only counts, for either side, only
if the nominated holder was online **and present for at least 20 minutes of it**. Merely logging
in no longer burns a contested day on its own. A holder on a two-week trip comes back to a war
that's barely moved, rather than one already lost to whoever declared the day after they left.

A **21-day** real-time cap stops a contest running forever against a holder who never logs in - at
the cap the war ends and is decided on whatever points exist. While a war has stalled - the holder
missing for **48 hours or more** - the challenger can walk away with a full refund instead of
waiting it out; a war that's actually being fought can't be abandoned.

War Points come only from real acting gains, scored as percent of each side's **own** bar so a
weaker and stronger Sequence are compared on effort, not raw numbers:

| Source | Weight |
|---|---|
| Ability gameplay, world content, player interaction, events | 1.0 |
| Stolen acting | 0.5 |
| Acting bottles, passive, admin grants, deity favor | 0.0 |

Standings are broadcast daily. Whoever is ahead at the end wins; a tie favors the holder.

**4. Resolution.** The winning challenger has to actually log in and drink the potion within **48
hours** of the win, or it's forfeited instead. On a genuine win:

- The holder drops one Sequence on that pathway only, keeps **95%** of their new bar, gets a
  half-price **deposed rematch** window lasting **60 days**, and receives the Beyonder
  characteristic of the seat they just lost.
- The challenger's escrowed potion is drunk through the normal advancement path into the seat that
  just opened.

The characteristic is what makes the rematch mean something - characteristics are conserved, so
losing a seat releases yours instead of destroying it, standing in for a main ingredient the next
time you brew toward it.

If the contest resolves itself before a verdict - the bracket opens on its own, either side
changes Sequence, nobody bid, or it's cancelled - every bid is refunded in full, potions included,
with no cooldown applied.

---

### Foreign-pathway settling

Reaching a pathway any way other than walking it from Sequence 9 - a potion switch, a free
transfer, a takeover - marks it foreign to you. A free transfer in particular can hand you a full
Sequence and a full acting bar on a pathway you've never actually walked, which would otherwise
let you satisfy the entire seat readiness checklist the instant you confirm the switch.

Foreign pathways carry two independent penalties:

| Penalty | Value |
|---|---|
| Challenge lockout | **30 days** before you can declare a seat or uniqueness challenge on it at all |
| Overflow settling | Banks at **25%** rate on arrival, ramping back to full over **60 days** |

The settling period runs twice as long as the lockout on purpose - you're still behind a native
walker of that pathway even the moment the lockout itself lifts, which is what makes the ladder
genuinely harder rather than merely delayed.

A pathway with no recorded acquisition stamp - including every character that existed before this
system shipped - is treated as native and is never affected.

---

### Quick reference

| You want to... | Command |
|---|---|
| Check your status, bank, and any active challenge | `/coi usurp` |
| Challenge a pathway's uniqueness | `/coi usurp uniqueness <pathway> [percent]` |
| Challenge a Sequence bracket | `/coi usurp seat <pathway> [percent]` |
| Pull your bid from an open window, or a stalled war | `/coi usurp withdraw` |
| Check your overflow bank and weekly source usage | `/coi acting status` |

---

### Worth remembering

- **Overflow is not acting.** It never fills your bar and never counts toward advancement - it
  only exists to spend on contesting something someone else holds.
- **Bottles never bank overflow.** They're the one acting source that exists purely to fill your
  bar, by design.
- **A seat war is decided by presence, not just login.** A holder has to be meaningfully online
  for a day to count against them, and inactivity is judged on real playtime, not a stale
  last-login timestamp.
- **Nothing but a win ever destroys your potion.** Every other outcome of a seat challenge hands
  it back to you with a fresh expiry.
- **Losing isn't the end.** A deposed holder keeps most of their bar, gets their characteristic
  back, and earns a half-price rematch window.
