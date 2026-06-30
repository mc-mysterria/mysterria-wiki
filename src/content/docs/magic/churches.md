---
title: "Churches"
description: "How to establish, maintain, and defend a Church as a living institution"
sidebar:
  label: ⛪ Churches
  order: 14
---

![Helpful image](../../../assets/magic/lotm.jpg)

### Quick Summary

A Church is a player-run religious institution tied to a leader, a pathway, members, prayer, and physical Church sites.

Churches can provide:
- Acting progress bonuses
- Madness recovery bonuses
- Madness floor relief for high sequences
- Blessings and support gifts
- Site-based prayer effects
- Artifact vault storage and borrowing
- Lands treasury/artifact perks
- War rewards or penalties

Church bonuses are not flat. They scale with Church health: active core, active members, recent prayer, site activity, branch network, roles, pathway relation, saturation, and war state.

Use these commands to diagnose your Church:
- `/coi church status`
- `/coi church perks`
- `/coi church acting`
- `/coi church my-site`
- `/coi church cooldowns`
- `/coi church top [pathway]`
- `/coi church land`

---

### Founding A Church

Every Church starts with a **Church Core**.

Default requirements:
| Requirement | Default |
| --- | --- |
| Beyonder required | Yes |
| Minimum strength | Sequence 4 or stronger |
| Existing Church membership | Not allowed |
| Existing Church leadership/co-ownership | Not allowed |
| Cooldown after leaving, being kicked, or disbanding | 7 days |

To found a Church:
1. Craft or receive a Church Core.
2. Place the Church Core where the main Church site should be.
3. Type the Church name when prompted.
4. Open `/coi church menu` or interact with the core to manage the Church.

Placed Church Core:

![Church Core placed](https://in.ikeepcalm.me/JIY3DZ5BUgyF.png)

:::caution[Core Ownership]
Fresh Church Cores are bound to the player who crafted or received them. A normal player cannot place someone else's core. Losing a core is not recommended.
:::

---

### Crafting Recipes

Default Church Core recipe:

![Church Core recipe](https://in.ikeepcalm.me/XFn6K2nShdYw.png)

| Slot symbol | Default item |
| --- | --- |
| D | Diamond Block |
| S | Nether Star |
| B | Beacon |
| E | Enchanting Table |
| O | Obsidian |
| N | Netherite Block |

Default shape: `DSD / BEB / NON`.

Default Church Vault recipe:

![Church Vault recipe](https://in.ikeepcalm.me/LdA4R48J2Gdg.png)

| Slot symbol | Default item |
| --- | --- |
| D | Diamond Block |
| C | Chest |
| E | Church Core |
| O | Obsidian |
| N | Netherite Block |

Default shape: `DCD / CEC / NON`. By default the center slot requires a real Church Core item, not just a normal beacon.

---

### Main Cores, Branches, And Regional HQs

The main Church Core is the headquarters. If the main core is inactive, missing, or broken, Church perks are heavily reduced.

Placing a Church Core does **not** make the Church work only in one chunk. Church presence is based on operational Church sites and radius checks around those sites.

Site types:
- **Main Site**: the Church headquarters and primary anchor.
- **Branch Site**: expands the Church network and local support.
- **Regional HQ**: Sequence 0 expansion site used when normal branch expansion needs regional administration.

Operational sites require an active placed core. A site that exists in data but has no valid placed core does not fully count.

---

### How To Make A Branch

Branches are created by placing another Church Core after your main Church site is already active.

Step-by-step:
1. Be the Church leader.
2. Make sure your main Church Core is placed and active.
3. Make sure your leader sequence has an available branch slot.
4. Craft or receive another Church Core.
5. Place that core at the new location.
6. The plugin will register it as a branch if you have branch capacity.
7. Open `/coi church menu` and manage it under the Church sites/branches section.

Default branch caps by leader sequence:

| Leader sequence | Branch cap |
| --- | ---: |
| Sequence 4 | 0 |
| Sequence 3 | 1 |
| Sequence 2 | 3 |
| Sequence 1 | 5 |
| Sequence 0 | 8, plus Regional HQ expansion |

If placing another core fails:
- You may not have a branch slot at your current sequence.
- Your main core may not be active.
- You may require a Regional HQ before the next expansion.
- The core may belong to another player.

---

### Regional HQs

Regional HQs are for Sequence 0 expansion beyond the normal branch network.

Default Regional HQ rules:
- The leader must be at the point where the next expansion requires a Regional HQ.
- The Regional HQ location must be far enough away from main HQ, branches, and other regional HQs.
- Default minimum distance is **5000 blocks**.
- A Regional HQ needs an eligible manager.
- Eligible managers are co-leaders or active angels with maximum piousness.

The Church GUI shows whether the current location is valid for Regional HQ expansion.

---

### Site Management

Church sites are stronger when they are active, prayed at, upgraded, and assigned leadership.

Important site roles:
- **Head Deacon**: primary local manager for a site.
- **Bishops**: local support roles that improve site coverage.
- **Regional Manager**: manager for a Regional HQ.

Site leadership matters. A high-sequence, active, praying site head gives better site coverage than a weak or inactive one.

Default head effectiveness by sequence:

| Head sequence/state | Effectiveness |
| --- | ---: |
| Sequence 0-4 | 100% |
| Sequence 5 | 70% |
| Sequence 6 | 55% |
| Sequence 7 | 45% |
| Sequence 8 | 35% |
| Sequence 9 | 25% |
| Non-Beyonder | 15% |
| Missing head | 65% |

Branches can decay if ignored. By default, branch activity decays after **14 days** without meaningful activity or revival.

Use the Church GUI to:
- View sites
- Assign local members
- Assign head deacons
- Assign bishops
- Donate offerings
- Upgrade sites
- Revive decayed branches

---

### How Church Perks Scale

Church perks are calculated from multiple factors at once. If one factor is weak, the final benefit can feel much smaller.

Main scaling factors:
- **Membership age**: new members ramp up over time.
- **Piousness**: prayer connection, recent prayer, and site participation.
- **Activity**: recent prayer and assigned site activity.
- **Saturation**: whether the Church has enough effective anchor weight for the leader's sequence.
- **Site network**: active main site, branches, and regional support.
- **Leadership coverage**: head deacons, bishops, co-leaders, and active angels.
- **Pathway relation**: same-pathway members usually help most; adjacent pathways still help; unrelated pathways help less.
- **War state**: war can freeze, reduce, or boost perks.
- **Main core state**: no active main core sharply reduces Church strength.

New-member perks ramp up over **14 days** by default. Members moved between Churches may also have a longer switch ramp before they give full value.

Offline members do not instantly stop counting. Members stop contributing when they become inactive or stop praying recently enough.

Default activity windows:

| Window | Default |
| --- | ---: |
| Member inactivity | 14 days without login |
| Prayer inactivity | 14 days without prayer |
| Site recent activity window | 7 days |
| Site decay | 14 days without meaningful branch activity |
| Weekly site prayer target | 12 prayers |
| Weekly site attendance target | 8 attendees |

---

### Anchors And Sequence Weight

Members contribute **anchor weight** to the Church. Anchor weight is the Church's measure of how much real spiritual support its congregation gives. The higher the total effective anchor weight, the stronger the Church's tier, madness relief, recovery scaling, and other support systems can become.

Only active members count properly. A member usually needs to have logged in recently and prayed recently. Offline members do not instantly stop counting, but inactive or non-praying members eventually stop contributing.

Default anchor weights:

| Member sequence/state | Base anchor weight |
| --- | ---: |
| Sequence 0 | 12.0 |
| Sequence 1 | 9.0 |
| Sequence 2 | 7.0 |
| Sequence 3 | 5.0 |
| Sequence 4 | 3.0 |
| Sequence 5 | 0.75 |
| Sequence 6 | 0.60 |
| Sequence 7 | 0.45 |
| Sequence 8 | 0.35 |
| Sequence 9 | 0.25 |
| Non-Beyonder | 0.15 |

Pathway relation affects contribution:

| Relation to Church pathway | Anchor multiplier |
| --- | ---: |
| Same pathway as the leader | 1.5x |
| Adjacent pathway | 1.25x |
| Other pathway | 1.0x |

Examples:
- A Sequence 4 member normally gives **3.0** anchor weight.
- If they are the same pathway as the leader, they give **4.5** effective anchor weight.
- If they are an adjacent pathway, they give **3.75** effective anchor weight.
- If they are unrelated, they give **3.0** effective anchor weight.

A Sequence 0 member normally gives **12.0** anchor weight, but stacking many high-sequence members has diminishing returns. This prevents Churches from getting unlimited strength from only a few very high-sequence players.

Low-sequence congregants also help in groups. By default, Sequence 5 and weaker members can add group anchor bonuses when enough of them are active. This means weaker members still matter, especially in large active Churches, even though each individual member has a smaller weight.

Default required effective anchor weight for full high-sequence Church support:

| Leader sequence | Required effective anchors |
| --- | ---: |
| Sequence 0 | 50 |
| Sequence 1 | 38 |
| Sequence 2 | 28 |
| Sequence 3 | 25 |
| Sequence 4 | 15 |

These are targets, not member counts. For example, a Sequence 4 leader needs **15 effective anchors** for full support. That could come from many weaker members, fewer stronger members, or a mix of both. Same-pathway and adjacent-pathway members help reach the target faster.

Example for a Sequence 4 leader:
- Required target: **15** effective anchors
- One same-pathway Sequence 4 member gives **4.5** effective anchors
- One unrelated Sequence 4 member gives **3.0** effective anchors
- One same-pathway Sequence 9 member gives **0.375** effective anchors

So a Church with only low-sequence members needs many active/praying followers, while a Church with several high-sequence aligned members reaches higher support much faster.

Church tier is based on progress toward the required anchor target:

| Church tier | Required progress |
| --- | ---: |
| Tier 2 | 25% |
| Tier 3 | 45% |
| Tier 4 | 70% |
| Tier 5 | 95% |

Example for a Sequence 4 leader with a **15** anchor target:
- Tier 2 starts around **3.75** effective anchors
- Tier 3 starts around **6.75** effective anchors
- Tier 4 starts around **10.5** effective anchors
- Tier 5 starts around **14.25** effective anchors

Higher tiers improve recovery, blessing, and acting scaling. If a Church loses active prayer, loses branch/site health, or has members go inactive, its effective anchor progress can drop and perks can weaken.

Churches also have a persisted **Church Progress** score. Progress is not a replacement for real members, but it helps a young Church build institutional weight over time. Progress contributes a limited anchor-equivalent bonus toward tier progress and ranking, so a new Church can grow through regular services instead of only waiting for raw member count.

Church progress comes mainly from meaningful Church actions such as sermons, mass, communion, confession, and future server-side religious activities. It is intentionally capped in its tier impact so that inactive Churches cannot replace active prayer and real congregation support with old progress alone.

Default progress conversion:

| Progress setting | Default |
| --- | ---: |
| Points per anchor-equivalent bonus | 100 |
| Maximum progress anchor bonus | 12 |

---

### Religion Ranking

Each pathway can have multiple Churches competing for recognition, but only one is effectively the top religion for that pathway at a time.

A Church has one official pathway. That pathway follows the current leader's primary pathway when the Church is created or transferred. Co-leaders and members can belong to other pathways, but they do not make the Church multi-pathway.

Use:
- `/coi church top` to show the strongest Churches overall.
- `/coi church top <pathway>` to show the ranking for one pathway or religion.

Ranking uses a religion score based on:
- Effective active anchor weight
- Church progress
- Church tier
- Operational sites
- Current Church health

The score is deterministic and uses the Church's persisted leader sequence when the live leader data is unavailable. The leader does not count as a normal member anchor for their own Church, so a ranking should not swing just because the leader is online while members are inactive. Use `/coi inspect church <leader>` or staff diagnostics to see the score breakdown, raw anchor weight, effective anchor weight, progress bonus, operational sites, and excluded members.

For example, if two Sequence 4 Chained leaders both establish Churches, they compete in the Chained ranking. The higher score is considered the dominant Chained religion until another Church surpasses it.

---

### Prayer And Piousness

Prayer keeps Church bonuses alive.

Prayer can:
- Refresh member activity.
- Improve piousness.
- Strengthen prayer connection.
- Add local site prayer traffic.
- Trigger short regeneration/tranquility support.
- Help nearby members during prayer effects.

Ways to pray:
- Use `/coi church pray`.
- Use the Church GUI prayer action.
- Chant the leader's complete Honorific Name line by line in chat.

Prayer is strongest near an operational Church site. Praying away from a Church site can still count, but it is much weaker by default.

The prayer messages now state the exact support that was applied, such as regeneration time, tranquility time, piousness gain, prayer-strength gain, or a reduced away-from-site effect. If the prayer was near no operational site, it should not add local site traffic.

Default prayer details:

| Prayer setting | Default |
| --- | ---: |
| Main prayer radius | 100 blocks around an operational site |
| Away prayer effect factor | 10% |
| Prayer connection duration | 30 minutes |
| Prayer effects cooldown | 12 hours |

If perks suddenly feel weak, ask members to pray at the Church site and check `/coi church perks` again.

Church status view:

![Church status GUI](https://in.ikeepcalm.me/qCjU60WFVN0J.png)

---

### Sermons And Services

Church services now have an institutional purpose beyond short-term effects.

Supported services:

| Service | Cooldown | Spirituality cost | Prayer strength | Extra effect | Base progress |
| --- | ---: | ---: | ---: | --- | ---: |
| Sermon | 60 minutes | 12 | +3.5% | None | 6 |
| Mass | 180 minutes | 16 | +4.5% | 8 seconds tranquility | 8 |
| Communion | 240 minutes | 18 | +5.0% | 2 recoverable madness relief | 7 |
| Confession | 120 minutes | 10 | +3.0% | 1 recoverable madness relief | 5 |

Progress formula defaults to `(base progress + capped participants * 0.75) * site activity factor`, with participants capped at 12 and site activity never counting below 25% for this calculation.

Services still require a valid Church site, an authorized officiant, nearby participation, cooldowns, and spirituality support. More participants increase progress up to a capped amount, and healthier sites convert services into progress more efficiently.

Staff can tune service costs, effects, cooldowns, and progress scaling globally, per Church, or per player with the Church staff override commands. This is intended for balancing live numbers without code changes.

This means a new Church with few members can still grow by consistently holding services, but it still benefits from recruiting active members, keeping the core operational, and maintaining prayer activity.

---

### Madness Recovery Bonus

Madness recovery bonus helps reduce recoverable madness more effectively. It does not erase permanent madness.

This bonus scales with:
- Membership age
- Piousness
- Recent prayer/activity
- Church saturation
- Site network strength
- Rank or role
- Angel support
- Pathway relation
- Church tier
- War state

Default maximum recovery bonus is up to **24** before soft/hard caps and scaling. Higher Church tiers can improve this further.

If recovery bonus is low, common causes are:
- Main core inactive or missing
- Not enough active/praying anchors
- Members have not prayed recently
- Branches are decayed or inactive
- Site leadership is missing or inactive
- Church is in a war state that reduces perks
- Member is new and has not ramped up yet

---

### Madness Floor Relief

High-sequence Beyonders can have a minimum madness floor. Church floor relief reduces that floor when the Church is healthy enough.

Default base madness floors:

| Sequence | Base madness floor |
| --- | ---: |
| 0 | 90% |
| 1 | 75% |
| 2 | 60% |
| 3 | 40% |
| 4 | 25% |
| 5-9 | 0% |

Floor relief scales with:
- Church saturation
- Leadership coverage
- Rank/role

For leaders and co-leaders, floor relief is based on Church health and their rank share. This means a co-leader should normally track close to the leader's relief when the Church itself is healthy. For regular members, membership age, piousness, and activity still reduce personal relief until they are established and active.

Default floor relief rank share and caps:

| Role | Rank share | Maximum relief cap |
| --- | ---: | ---: |
| Leader | 100% | 100% |
| Co-leader | 95% | 100% |
| Commander fallback | 85% | 85% when fully supported |
| Angel | 75% | 90% |
| Head deacon | 65% | 80% |
| Bishop | 55% | 70% |
| Senior follower | 45% | 60% |
| Follower | 38% | 55% |
| Junior follower | 30% | 45% |
| New follower | 20% | 35% |

This means a weak Church may barely reduce the floor, while a healthy Church can greatly reduce it for important members.

---

### Roles And What They Do

**Leader**
- Owns the Church.
- Creates and places Church Cores.
- Gets the strongest Church profile.
- Can manage members, sites, angels, and high-level actions.

**Co-leader**
- Has leader-like authority for many Church systems.
- Counts strongly for floor relief and leadership coverage.
- Can be used as an eligible Regional HQ manager.

**Angel**
- Requires high sequence by default.
- Default minimum angel sequence is **Sequence 3**.
- Can receive strong Church benefits when angel effects are active.
- Can help blessings, gifts, vault control, and site support.
- Angel-specific effects pause if the Church has more angels than its angel slot cap.

Default angel slots:

| Angel slot source | Slots |
| --- | ---: |
| Base angel slots | 3 |
| Each active branch | +1 |

**Head Deacon**
- Runs a local site.
- Improves local site coverage.
- Can help with local support duties.

**Bishop**
- Supports a local site.
- Improves site coverage.
- Default max bishops per site: **2**

**Follower**
- Provides anchor weight and Church strength through prayer, activity, and seniority.
- Becomes more valuable as membership age increases.

Seniority defaults:

| Seniority | Membership age |
| --- | ---: |
| Junior follower | 3 days |
| Follower | 7 days |
| Senior follower | 14 days |

---

### Acting Bonus

Church acting bonuses help with acting progression.

Acting bonus scales with:
- Membership age
- Piousness
- Recent activity
- Church saturation
- Site network strength
- Rank/role
- Pathway relation
- Church tier
- War state

Same-pathway and adjacent-pathway members usually receive better support than unrelated pathway members.

If acting bonus is weak, improve prayer activity, site health, and anchor saturation.

Use `/coi church acting` or `/coi church perks` to see your current personal Church acting boost and the main factors affecting it.

---

### Blessings

Blessings are direct Church support actions.

Blessings can reduce:
- Recoverable madness
- Tiredness
- Immediate danger through short support effects

Blessings usually require the target to be near an operational Church site and cannot be used freely as a combat spam tool.

Default blessing values:

| Blessing setting | Default |
| --- | ---: |
| Cooldown per target | 10 minutes |
| Target tracking window | 30 minutes |
| Target soft cap | 2 uses |
| Over-cap falloff | 35% |
| Minimum effect factor | 35% |

| Target tier | Recoverable madness relief | Tiredness relief | Support duration | Spirituality cost |
| --- | ---: | ---: | ---: | ---: |
| Site officers | 4 | 6 | 6 seconds | 10 |
| Leaders, co-leaders, active angels | 6 | 10 | 10 seconds | 18 |

Blessing strength scales with Church health, pathway relation, piousness, saturation, rank, and repeated-use falloff.

---

### Gifts

Gifts are stronger support actions from leaders, co-leaders, and active angels.

Gift types:
- **Madness Relief**: reduces recoverable madness
- **Spirituality Restore**: restores spirituality
- **Tiredness Recovery**: reduces tiredness
- **Sanctuary Renewal**: grants regeneration and absorption support

Gifts cost the giver spirituality and may add recoverable madness burden to the giver.

Default gift settings:

| Gift setting | Default |
| --- | ---: |
| Cooldown per giver, target, and type | 5 minutes |
| Self-gifts | Disabled |
| Target tracking window | 60 minutes |
| Target soft cap | 1 use |
| Over-cap falloff | 50% |
| Minimum effect factor | 40% |
| Max giver madness after cost | 95% |

Default gift values before repeated-use scaling:

| Gift type | Effect | Spirituality cost | Giver madness burden |
| --- | --- | ---: | ---: |
| Madness Relief | Up to 10 recoverable madness relief | 30 | 1.0 |
| Spirituality Restore | Up to 35 spirituality restored | 24 | 0.5 |
| Tiredness Recovery | Up to 20 tiredness relief | 28 | 0.75 |
| Sanctuary Renewal | 20 seconds regeneration and 120 seconds absorption | 36 | 1.5 |

Gifts are not meant to be unlimited healing. Repeated gifts on the same target become less effective.

---

### Treasury, Offerings, And Upgrades

Offerings add value to a site's treasury. Hold an item and use the site action in the Church GUI.

Treasury can be used for:
- Site upgrades
- Site revival
- Some Church maintenance/support flows

Site upgrades improve local support, capacity, and Church network strength.

If the Church is linked to Lands, offerings and upgrade costs can interact with the linked Land treasury depending on server configuration.

---

### Artifact Vaults

Church vaults are physical artifact rooms linked to Church sites.

Default behavior:
- Church leaders craft vault items.
- A vault must be placed near an active Church Core.
- Vault recipes may require a real Church Core ingredient by default.

Vaults support:
- Church artifact storage
- Artifact requests from members
- Approval/denial by managers
- Borrow duration and automatic recall rules

How storage and retrieval works:
- A manager stores a held sealed artifact at a physical Church Vault.
- The vault belongs to the Church site where it was placed.
- Members request a stored artifact instead of taking it directly.
- A manager approves or denies the request.
- Approved artifacts must be returned before the borrow timer expires.
- Expired or manually recalled artifacts are removed from the borrower's inventory and returned to Church storage.

Default vault values:

| Vault setting | Default |
| --- | ---: |
| Placement distance from Church Core | 16 blocks |
| Access distance from physical vault | 10 blocks |
| Base artifact capacity | 0 |
| Capacity per Church tier | +1 |
| Capacity per vault | +1 |
| Capacity per site level | +1 |
| Capacity per Lands artifact link | +1 |
| Maximum capacity | 12 |
| Base borrow duration | 2 hours |
| Maximum borrow duration | 4 hours |

Remote retrieval:
- Each site can remember one stored artifact as that site's remote artifact.
- Leaders, active angels, Church authorities, and that site's head deacon can manage normal local artifact requests.
- High-level managers can approve or recall remembered remote artifacts.
- Regular members still request artifacts; they do not freely remote-withdraw artifacts.

Borrow duration scales up with Church tier, active vault network, site levels, stored artifacts, support levers, and approved Lands artifact perks.

GUI retrieval:
- Members request artifacts from the vault GUI.
- Managers approve, deny, recall, return, or inspect artifacts from the GUI.
- Borrowed artifacts are tracked as a temporary physical copy. Dropping, container storage, hopper movement, duplicate copies, expired borrows, and manual recalls are reconciled back into Church storage.
- Owners recalling an artifact they currently hold should clear the borrow state instead of creating another copy.

Staff vault recovery commands exist for broken cases:
- `/coi church vault artifact list <leader>`
- `/coi church vault artifact inspect <leader> <artifactId>`
- `/coi church vault artifact recall <leader> <artifactId>`
- `/coi church vault artifact borrow <leader> <artifactId> <player> [durationSeconds]`
- `/coi church vault artifact give <leader> <artifactId> <player> [removeFromStorage]`
- `/coi church vault artifact drop <leader> <artifactId> [removeFromStorage]`
- `/coi church vault artifact remove <leader> <artifactId>`
- `/coi church vault artifact set-site <leader> <artifactId> <siteId>`
- `/coi church vault artifact request-clear <leader> <artifactId>`
- `/coi church vault artifact request-clear-all <leader>`
- `/coi church vault artifact remote set <leader> <siteId> <artifactId>`
- `/coi church vault artifact remote clear <leader> <siteId>`

---

### Lands Integration

Churches do **not** create Lands claims by themselves.

If Lands is installed, a Church can request a link to the Land containing one of its operational Church sites. The linked site can be the main headquarters, a branch, or a regional HQ.

Step-by-step link flow:
- Claim the chunk or area in Lands first.
- Put the Church site core inside that claimed Lands area.
- Run `/coi church land request` near the site, or `/coi church land request <siteId>` for a specific site.
- Ask the Land owner to run `/coi church land approve <churchLeader>`.
- Run `/coi church land` to confirm the linked Land and linked Church site.

Without a site argument, `/coi church land request` uses your assigned or nearest Church site, then falls back to the main site.

Default Land slot scaling:

| Land slot source | Slots |
| --- | ---: |
| Base slots | 3 |
| Every 10 claimed chunks | +1 |
| Example: 100 claimed chunks | 13 total |

Land owners can manage enabled link perks after approval:
- **Treasury**: lets eligible Church treasury flows use the linked Land treasury when server settings allow it.
- **Artifacts**: gives the linked Church a small artifact vault capacity and borrow-duration bonus.

Useful commands:
- `/coi church land`
- `/coi church land request [siteId]`
- `/coi church land approve <churchLeader>`
- `/coi church land deny <churchLeader>`
- `/coi church land perk <churchLeader> <treasury|artifacts> <true|false>`
- `/coi church land unlink`

Only operational Church sites can be linked. If a core is missing, inactive, stale, or decayed, the link request should fail until the site is repaired. Core and vault interaction is allowed inside claimed land; only breaking is gated by Lands permissions and accepted Church war objective rules.

---

### Diplomacy And War

Churches can mark each other as allies, enemies, or neutral through the Church GUI.

War can affect perks:
- One-sided declarations can reduce the declarer's perks.
- Accepted wars can freeze or reduce perks.
- Winners can receive temporary boosts.
- Losers or draws can receive temporary penalties.

During accepted wars, enemy participants may be allowed to break Church objectives such as cores or vaults. Breaking a main core can decide the war.

Core breaking message:

![Church breaking message](https://in.ikeepcalm.me/mTxUFlLZVXbe.png)

Useful war commands:
- `/coi church war`
- `/coi church war surrender <leader>`
- `/coi church war draw <leader>`

---

### Troubleshooting Low Perks

If madness relief, acting bonus, or blessings suddenly feel weak, check these first:

- Is the main Church Core active and placed?
- Did members pray recently?
- Did the leader pray recently?
- Are enough members active within the last 14 days?
- Are branches active, or have they decayed?
- Are head deacons and bishops assigned?
- Is site leadership active and praying?
- Are there too many angels for the current angel slot cap?
- Is the Church in an accepted war or penalty state?
- Is the player a new member still ramping up?
- Is the player same pathway, adjacent pathway, or unrelated pathway?

Commands to check:
- `/coi church status`
- `/coi church perks`
- `/coi church acting`
- `/coi church my-site`
- `/coi church cooldowns`
- `/coi church top [pathway]`
- `/coi church land`

---

### Useful Commands

Player commands:
- `/coi church menu`
- `/coi church establish <name>`
- `/coi church add <player>`
- `/coi church accept`
- `/coi church remove <player>`
- `/coi church leave`
- `/coi church pray`
- `/coi church status`
- `/coi church my-site`
- `/coi church cooldowns`
- `/coi church perks`
- `/coi church acting`
- `/coi church top [pathway]`
- `/coi church land`
- `/coi church land request [siteId]`
- `/coi church war`

Most advanced actions are in the Church GUI.

Common manager and staff controls:
- `/coi church ownership handoff <player> confirm` for player-led ownership transfer.
- `/coi church ownership transfer <oldLeader> <newLeader>` for staff ownership transfer.
- `/coi church role set <player> <role>` for leader/manager role changes.
- `/coi church blessing inspect|force|cooldown clear|cooldown clear-church|cooldown clear-all`
- `/coi church gift inspect|force|cooldown clear|cooldown clear-player|cooldown clear-church|cooldown clear-all`
- `/coi church cooldown clear <player>`, `/coi church cooldown clear-all <player>`, and `/coi church cooldown clear-global <scope>` for cooldown repair.
- `/coi church override ...` for global, Church, and player-specific costs, cooldowns, effects, capacities, and scaling.

---

### Leader Checklist

- Keep the main core active.
- Craft and place branch cores when your sequence allows more branches.
- Recruit active members, not just names on a list.
- Encourage regular prayer at Church sites.
- Assign head deacons and bishops to sites.
- Promote eligible angels when useful, but stay under the angel slot cap.
- Build and maintain branch sites.
- Upgrade active sites with treasury.
- Protect vaults and cores during war.
- Use `/coi church status` and `/coi church perks` to diagnose low bonuses.

---

Many values on this page are defaults and may differ on live servers.
