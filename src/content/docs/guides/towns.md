---
title: "Towns"
description: "How to create and manage towns"
sidebar:
    label: 🌆 Towns
    order: 1
---

![Helpful image](../../../newassets/towns/towns.jpg)

### Creating a Town
```
/town create <town_name>
```

### Basic Town Commands
- `/town` - information about your town
- `/town bio` - set town description
- `/town invite <player>` - invite a player to the town
- `/town evict <player>` - remove a player from the town
- `/town invite accept` - accept an invitation from another player
- `/town rules` - list of town permissions (only for Radiant)

### Plot Management
- `/town claim` - claim one chunk of land for your town
- `/town unclaim` - unclaim one chunk of land from your town

### Entry / Exit Messages
- `/town greeting <message>` - entry message for the territory
- `/town farewell <message>` - exit message from the territory

### Additional Commands
- `/town color <color>` - change color on the online map
- `/town rename <name>` - change town name
- `/town transfer <player>` - transfer mayor position
- `/town promote <player>` - promote resident to officer
- `/town demote <player>` - demote officer to resident
- `/town map` - show town map in chat
- `/town disban` - delete town

### Economic Commands
- `/town deposit <amount>` - add funds to town treasury
- `/town withdraw <amount>` - withdraw funds from treasury
- `/town level` - upgrade town level

## Town Levels

Each town has a certain level. Each level has its own limit on the number of territories and maximum participants. To upgrade the town level, you need to have sufficient funds in the treasury (`/town deposit <amount>`) and execute the `/town level` command.

## Town Permissions

Each town automatically protects its territories from outsiders; only residents can build, break blocks, kill animals, or perform other actions within the town. However, mayors and officers can mark certain territory as a "Farm" (`/town farm`); and mayors with **☀️ Radiant** subscription can change rules for their own town.

Permission settings look like this:

![Helpful image](../../../newassets/towns/rules.png)

## Why Develop Large Towns?

Large towns (truly large ones with massive projects) can create a request to implement a special function tied to their city's creation. An example will make it clearer:

> Town **N** built a huge **Dragon** statue. The majesty of the mighty dragon so influences the environment that almost all evil monsters disappear from the town's territory! Without the need for the leader to have a Radiant subscription, too!
![Helpful image](../../../newassets/towns/dragon.jpeg)

Or another:

> Town **K** built a huge town hall-cathedral in the middle of their city. The sight so positively affects the morale of residents that within their city's borders they recover health, spirituality, or even gain performance faster!
![Helpful image](../../../newassets/towns/hall.jpg)