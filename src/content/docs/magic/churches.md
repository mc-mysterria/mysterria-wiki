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
- `/coi church my-site`
- `/coi church cooldowns`
- `/coi church top [pathway]`
- `/coi church land`

---

### Founding A Church

Every Church starts with a **Church Core**.

Default requirements:
- You must be a Beyonder.
- You must be Sequence 4 or stronger.
- You cannot already be a Church member, leader, or co-owner.
- If you recently left or were removed from a Church, you must wait 14 days before joining another church.

To found a Church:
1. Craft or receive a Church Core.
2. Place the Church Core where the main Church site should be.
3. Type the Church name when prompted.
4. Open `/coi church menu` or interract with the core to manage the Church.

:::caution[Core Ownership]
Fresh Church Cores are bound to the player who crafted or received them. A normal player cannot place someone else's core. Losing a core is not recommended.
:::

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
- Sequence 4: **0** branches
- Sequence 3: **1** branch
- Sequence 2: **3** branches
- Sequence 1: **5** branches
- Sequence 0: **8** branches, plus regional HQ expansion

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
- Sequence 0-4: strong site leadership
- Sequence 5: reduced leadership
- Sequence 6-9: increasingly weaker leadership
- Non-Beyonder or missing head: very weak coverage

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
- Member inactivity: **14 days** without login
- Prayer inactivity: **14 days** without prayer
- Site decay: **14 days** without meaningful branch activity

---

### Anchors And Sequence Weight

Members contribute **anchor weight** to the Church. Anchor weight is the Church's measure of how much real spiritual support its congregation gives. The higher the total effective anchor weight, the stronger the Church's tier, madness relief, recovery scaling, and other support systems can become.

Only active members count properly. A member usually needs to have logged in recently and prayed recently. Offline members do not instantly stop counting, but inactive or non-praying members eventually stop contributing.

Default anchor weights:
- Sequence 0: **12.0**
- Sequence 1: **9.0**
- Sequence 2: **7.0**
- Sequence 3: **5.0**
- Sequence 4: **3.0**
- Sequence 5: **0.75**
- Sequence 6: **0.60**
- Sequence 7: **0.45**
- Sequence 8: **0.35**
- Sequence 9: **0.25**
- Non-Beyonder: **0.15**

Pathway relation affects contribution:
- Same pathway as the leader: strongest contribution, **1.5x** anchor weight
- Adjacent pathway: strong contribution, **1.25x** anchor weight
- Other pathway: normal contribution, **1.0x** anchor weight

Examples:
- A Sequence 4 member normally gives **3.0** anchor weight.
- If they are the same pathway as the leader, they give **4.5** effective anchor weight.
- If they are an adjacent pathway, they give **3.75** effective anchor weight.
- If they are unrelated, they give **3.0** effective anchor weight.

A Sequence 0 member normally gives **12.0** anchor weight, but stacking many high-sequence members has diminishing returns. This prevents Churches from getting unlimited strength from only a few very high-sequence players.

Low-sequence congregants also help in groups. By default, Sequence 5 and weaker members can add group anchor bonuses when enough of them are active. This means weaker members still matter, especially in large active Churches, even though each individual member has a smaller weight.

Default required effective anchor weight for full high-sequence Church support:
- Sequence 0 leader: **50** effective anchors
- Sequence 1 leader: **38** effective anchors
- Sequence 2 leader: **28** effective anchors
- Sequence 3 leader: **25** effective anchors
- Sequence 4 leader: **15** effective anchors

These are targets, not member counts. For example, a Sequence 4 leader needs **15 effective anchors** for full support. That could come from many weaker members, fewer stronger members, or a mix of both. Same-pathway and adjacent-pathway members help reach the target faster.

Example for a Sequence 4 leader:
- Required target: **15** effective anchors
- One same-pathway Sequence 4 member gives **4.5** effective anchors
- One unrelated Sequence 4 member gives **3.0** effective anchors
- One same-pathway Sequence 9 member gives **0.375** effective anchors

So a Church with only low-sequence members needs many active/praying followers, while a Church with several high-sequence aligned members reaches higher support much faster.

Church tier is based on progress toward the required anchor target:
- Tier 2: **25%** progress
- Tier 3: **45%** progress
- Tier 4: **70%** progress
- Tier 5: **95%** progress

Example for a Sequence 4 leader with a **15** anchor target:
- Tier 2 starts around **3.75** effective anchors
- Tier 3 starts around **6.75** effective anchors
- Tier 4 starts around **10.5** effective anchors
- Tier 5 starts around **14.25** effective anchors

Higher tiers improve recovery, blessing, and acting scaling. If a Church loses active prayer, loses branch/site health, or has members go inactive, its effective anchor progress can drop and perks can weaken.

Churches also have a persisted **Church Progress** score. Progress is not a replacement for real members, but it helps a young Church build institutional weight over time. Progress contributes a limited anchor-equivalent bonus toward tier progress and ranking, so a new Church can grow through regular services instead of only waiting for raw member count.

Church progress comes mainly from meaningful Church actions such as sermons, mass, communion, confession, staff events, and future server-side religious activities. It is intentionally capped in its tier impact so that inactive Churches cannot replace active prayer and real congregation support with old progress alone.

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

Default prayer details:
- Main prayer radius: **100 blocks** around an operational site
- Away prayer effect is much weaker than site prayer
- Prayer connection lasts **30 minutes** by default
- Prayer effects have a **12 hour** cooldown by default

If perks suddenly feel weak, ask members to pray at the Church site and check `/coi church perks` again.

---

### Sermons And Services

Church services now have an institutional purpose beyond short-term effects.

Supported services include:
- **Sermon**: strengthens prayer connection and gives the best basic Church progress for a young congregation.
- **Mass**: improves prayer strength, gives Church progress, and applies short tranquility support.
- **Communion**: improves prayer strength, gives Church progress, and provides small madness relief.
- **Confession**: gives smaller Church progress and minor madness relief.

Services still require a valid Church site, an authorized officiant, nearby participation, cooldowns, and spirituality support. More participants increase progress up to a capped amount, and healthier sites convert services into progress more efficiently.

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
- Sequence 0: **90**
- Sequence 1: **75**
- Sequence 2: **60**
- Sequence 3: **40**
- Sequence 4: **25**
- Sequence 5-9: **0**

Floor relief scales with:
- Church saturation
- Leadership coverage
- Rank/role

For leaders and co-leaders, floor relief is based on Church health and their rank share. This means a co-leader should normally track close to the leader's relief when the Church itself is healthy. For regular members, membership age, piousness, and activity still reduce personal relief until they are established and active.

Default floor relief rank share:
- Leader: **100%**
- Co-leader: **95%**
- Angel: **75%**
- Head deacon: **65%**
- Bishop: **55%**
- Senior follower: **45%**
- Follower: **38%**
- Junior follower: **30%**
- New follower: **20%**

Default maximum floor relief caps:
- Leader: **100%**
- Co-leader: **100%**
- Angel: **90%**
- Head deacon: **80%**
- Bishop: **70%**
- Senior follower: **60%**
- Follower: **55%**
- Junior follower: **45%**
- New follower: **35%**

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
- Base angel slots: **3**
- Each active branch adds **1** angel slot

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
- Junior follower: after **3 days**
- Follower: after **7 days**
- Senior follower: after **14 days**

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

---

### Blessings

Blessings are direct Church support actions.

Blessings can reduce:
- Recoverable madness
- Tiredness
- Immediate danger through short support effects

Blessings usually require the target to be near an operational Church site and cannot be used freely as a combat spam tool.

Default blessing cooldown:
- **10 minutes** per target

Default base blessing values before scaling:
- Site officers: up to **4 recoverable madness**, **6 tiredness**, and **6 seconds** of support
- Leaders, co-leaders, and active angels: up to **6 recoverable madness**, **10 tiredness**, and **10 seconds** of support

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

Default gift cooldown:
- **5 minutes** per giver, target, and gift type

Default gift values before repeated-use scaling:
- Madness Relief: up to **10 recoverable madness**, costs **30 spirituality**, adds **1 recoverable madness** to the giver
- Spirituality Restore: up to **35 spirituality**, costs **24 spirituality**, adds **0.5 recoverable madness** to the giver
- Tiredness Recovery: up to **20 tiredness**, costs **28 spirituality**, adds **0.75 recoverable madness** to the giver
- Sanctuary Renewal: **20 seconds** regeneration and short absorption, costs **36 spirituality**, adds **1.5 recoverable madness** to the giver

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
- Staff can change recipes and requirements on the live server.

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

Default access range:
- Normal vault actions require standing near the physical vault, usually within **10 blocks**.
- This range is not chunk based.

Remote retrieval:
- Each site can remember one stored artifact as that site's remote artifact.
- Leaders, active angels, and that site's head deacon can approve or recall that remembered artifact remotely.
- Regular members still request artifacts; they do not freely remote-withdraw artifacts.

Default borrow duration is **2 hours**, scaling up with Church tier, active vault network, site levels, stored artifacts, support levers, and approved Lands artifact perks. Default maximum borrow duration is **4 hours**.

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
- Each Land starts with **3 Church link slots**.
- Each **10 claimed chunks** adds **1 extra Church link slot**.
- A Land with **100 claimed chunks** can support **13 linked Churches**.

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

---

### Diplomacy And War

Churches can mark each other as allies, enemies, or neutral through the Church GUI.

War can affect perks:
- One-sided declarations can reduce the declarer's perks.
- Accepted wars can freeze or reduce perks.
- Winners can receive temporary boosts.
- Losers or draws can receive temporary penalties.

During accepted wars, enemy participants may be allowed to break Church objectives such as cores or vaults. Breaking a main core can decide the war.

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
- `/coi church my-site`
- `/coi church cooldowns`
- `/coi church top [pathway]`
- `/coi church land`

---

### Staff Intervention

Staff can manually stabilize Churches when needed for events, recovery, or support tickets.

Common staff commands:
- `/coi church diag score <leader>`: shows the Church's anchor contribution rows, included/excluded members, last seen time, last prayer time, pathway multiplier, soft caps, tier progress, and religion score.
- `/coi church diag member <player> [pathway]`: combines player link diagnostics with perk, acting, recovery, and madness floor breakdowns.
- `/coi church diag perks <player> [pathway]`: explains acting bonus, recovery bonus, blessing effectiveness, floor relief, and the formula factors.
- `/coi church diag observe <watcher> <target> [remote]`: explains Blessed Observation availability and blockers.
- `/coi church diag core <leader> [siteId]`: explains Church Core saved state and placed-block PDC state.
- `/coi church staff support full <leader>`: forces strong saturation, perk multipliers, floor relief, active timestamps, and tier unlocks for one Church.
- `/coi church staff support clear <leader>`: removes those full-support overrides.
- `/coi church staff progress set <leader> <amount>`: sets Church progress directly.
- `/coi church staff progress add <leader> <amount>`: adds Church progress.
- `/coi church staff age church <leader> <days>`: sets the Church's effective age.
- `/coi church staff age member <player> <days>`: sets a player's effective membership age.
- `/coi church staff member active <player>`: marks a participant active/praying.
- `/coi church staff member inactive <player>`: marks a participant inactive.
- `/coi church sync-members <leader> [active]`: refreshes stored member/co-leader snapshots; `active` also refreshes prayer/activity timestamps.
- `/coi church repair-links <leader>`: repairs persisted Beyonder membership links from Church data.

These commands are intended for moderation, event balancing, and data repair. They are not normal player progression.

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
- `/coi church top [pathway]`
- `/coi church land`
- `/coi church land request [siteId]`
- `/coi church war`

Most advanced actions are in the Church GUI.

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
