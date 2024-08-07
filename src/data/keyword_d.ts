import { Keyword } from "@/types";

export const KeywordsD: Keyword[] = [
  {
    keyword: "danger_sense",
    name: "Danger Sense",
    activation: "",
    parents: ["d", "units"],
    tag: "Unit Keyword",
    related_keywords: ["suppression", "attack"],
    descriptions: [
      {
        type: "text",
        content:
          "When a unit with the Danger Sense X keyword would remove any number of its suppression tokens, it may choose to not remove up to X tokens, including zero.",
      },
      {
        type: "text",
        content:
          "While a unit with the Danger Sense X keyword is defending against an attack, it rolls one extra defense die during the Roll Defense Dice step for every suppression token it has, up to X additional dice.",
      },
    ],
  },
  {
    keyword: "dauntless",
    name: "Dauntless",
    activation: "",
    parents: ["d", "units"],
    tag: "Unit Keyword",
    related_keywords: ["rally", "move", "suppression", "compel"],
    descriptions: [
      {
        type: "text",
        content:
          "After a unit with the Dauntless keyword performs its Rally step and is suppressed but not panicked, at the beginning of its Perform Action step, it may gain one suppression token to perform a free move action.",
      },
      {
        type: "text",
        content:
          "A unit with the Dauntless keyword may not be affected by the {keyword:Compel} keyword.",
      },
    ],
  },
  {
    keyword: "death_from_above",
    name: "Death From Above",
    activation: "",
    parents: ["d", "units"],
    tag: "Unit Keyword",
    related_keywords: ["attack", "cover", "apply_dodge_cover", "terrain"],
    descriptions: [
      {
        type: "text",
        content:
          "When a unit with the Death From Above keyword attacks, the defending unit cannot use cover to cancel hit a results during the Apply Cover step if the attacking unit's unit leader is overlapping a piece of non-area terrain of greater height than any terrain the defending unit's unit leader is overlapping.",
      },
    ],
  },
  {
    keyword: "defend_x",
    name: "Defend X",
    activation: "",
    parents: ["d", "units"],
    tag: "Unit Keyword",
    related_keywords: ["issue_order", "dodge"],
    descriptions: [
      {
        type: "text",
        content:
          "After a unit with the Defend X keyword is issued an order, it gains X dodge tokens.",
      },
    ],
  },
  {
    keyword: "deflect",
    name: "Deflect",
    activation: "",
    parents: ["d", "units"],
    tag: "Unit Keyword",
    related_keywords: [
      "ranged_weapon",
      "attack",
      "guardian",
      "wounds",
      "high_velocity",
    ],
    descriptions: [
      {
        type: "text",
        content:
          "While a unit with the Deflect keyword is defending against a ranged attack or using the {keyword:Guardian X} keyword, its surge conversion chart gains {block_surge}:{block}. Additionally, during the Convert Defense Surges step before converting {block_surge} results, the attacker suffers one wound if there is at least one {block_surge} result in the defense roll.",
      },
      {
        type: "text",
        content:
          "If the Deflect keyword causes the attacking unit to be defeated, the attack continues, and the defender can still suffer wounds.",
      },
      {
        type: "text",
        content:
          "While defending or using the {keyword:Guardian X} keyword against an attack in which weapons with the {keyword:High Velocity} weapon keyword are the only weapons in an attack pool, the Deflect keyword has no effect.",
      },
    ],
  },
  {
    keyword: "demoralize_x",
    name: "Demoralize X",
    activation: "",
    parents: ["d", "units"],
    tag: "Unit Keyword",
    range: "range_2",
    related_keywords: ["rally"],
    descriptions: [
      {
        type: "text",
        content:
          "After a unit with the Demoralize X keyword performs its Rally step, add up to X total suppression tokens to enemy units at {range_2}.",
      },
    ],
  },
  {
    keyword: "detachment",
    name: "Detachment: Name/Type",
    activation: "",
    parents: ["d", "units"],
    tag: "Unit Keyword",
    related_keywords: [
      "army_building",
      "deploy",
      "infiltrate",
      "prepared_positions",
    ],
    descriptions: [
      {
        type: "text",
        content:
          "During Army Building, a unit with the Detachment keyword doesn’t count against the maximum number of units of its rank that can be included. A unit with the Detachment keyword can be included in a player’s army only if another unit that has the unit name or unit type specified and does not have the Detachment keyword is also included in that army.",
      },
      {
        type: "text",
        content:
          "Each unit with the Detachment keyword needs its own matching specified unit. Additionally, during the Deploy in Prepared Positions step, a unit with the Detachment keyword gains the {keyword:Infiltrate} or {keyword:Prepared Position} keyword for the remainder of the game if its matching specified unit has that keyword.",
      },
      {
        type: "example",
        content: [
          { type: "header", content: "Example: Detachment" },
          {
            type: "text",
            content:
              "For example, a player wishes to add a DF-90 Mortar Trooper to their army. Because the DF-90 Mortar Trooper has the Detachment: Shoretroopers keyword, the player must first add a unit of Shoretroopers to their army before adding the DF-90 Mortar Trooper. The player does so, and the army now contains a Shoretroopers unit and a DF-90 Mortar Trooper unit. The player then wishes to add a second DF-90 Mortar Trooper unit to their army, and therefore must first select a second unit of Shoretroopers to include in their army.",
          },
        ],
      },
    ],
  },
  {
    keyword: "detonate_x",
    name: "Detonate X (Charge Type)",
    parents: ["d", "weapons"],
    tag: "Weapon Keyword",
    related_keywords: [
      "move",
      "attack",
      "actions",
      "standby",
      "line_of_sight",
      "charge_token",
    ],
    descriptions: [
      {
        type: "text",
        content:
          "After a unit controlled by any player attacks, moves, or performs an action, each unit that has a weapon with the Detonate X keyword may detonate up to X friendly charge tokens of the specified type. If a token would detonate, that token detonates before any other abilities or effects that occur after a unit moves or performs an action, with the exception of spending a standby token which can be spent by a unit before the token detonates. If both players have units that could detonate charge tokens, the player that does not control the unit that just performed the attack, move, or action may use their unit’s Detonate X keyword first.",
      },
      {
        type: "text",
        content:
          "When a token detonates, perform a separate attack against each unit, friendly and enemy, that has LOS to the token and is in range of the area weapon, using the surge conversion chart and weapon keywords on the card for the token being detonated. The detonating token is considered the attacking unit when making attacks, meaning that it cannot spend aim tokens or modify attack dice, regardless of any abilities on the unit that placed the token. After a token detonates, remove it from the battlefield.",
      },
      { type: "reference", referenced_keyword: "charge_token" },
    ],
  },
  {
    keyword: "deploy",
    name: "Deploy",
    parents: ["d"],
    related_keywords: ["activating_units", "actions"],
    descriptions: [
      { type: "header", content: "Deploying Units" },
      {
        type: "text",
        content:
          "When an undeployed unit performs a move, it deploys. When a unit deploys in this way, measure the start of the move with both prongs of one end of the movement tool touching the portion of the edge of the battlefield within friendly territory.",
      },
      {
        type: "text",
        content:
          "When a unit deploys, the unit leader measures the vertical distance changed during that move starting from the portion of the edge of the battlefield the movement tool is touching. When an undeployed unit activates, it must deploy and may not perform any action that is not a move until it deploys. Only undeployed units can deploy.",
      },
    ],
  },
  {
    keyword: "direct",
    name: "Direct Name/Type",
    activation: "",
    parents: ["d", "units"],
    tag: "Unit Keyword",
    range: "range_2",
    related_keywords: ["issue_order", "command_phase"],
    descriptions: [
      {
        type: "text",
        content:
          "Each Command Phase, during the Issue Orders step, a unit with the Direct keyword may issue an order to a friendly unit at {range_2} that has the unit name or unit type specified.",
      },
    ],
  },
  {
    keyword: "disciplined_x",
    name: "Disciplined X",
    activation: "",
    parents: ["d", "units"],
    tag: "Unit Keyword",
    related_keywords: ["issue_order", "suppression"],
    descriptions: [
      {
        type: "text",
        content:
          "After a unit with the Disciplined X keyword is issued an order, it may remove up to X suppression tokens.",
      },
    ],
  },
  {
    keyword: "disengage",
    name: "Disengage",
    activation: "",
    parents: ["d", "units"],
    tag: "Unit Keyword",
    related_keywords: ["engaged", "melee", "move"],
    descriptions: [
      {
        type: "text",
        content:
          "While a trooper unit with the Disengage keyword is engaged with a single enemy unit, it can still perform moves as normal.",
      },
    ],
  },
  {
    keyword: "distract",
    name: "Distract",
    range: "range_2",
    activation: "",
    parents: ["d", "units"],
    tag: "Unit Keyword",
    related_keywords: [
      "free_card_action",
      "line_of_sight",
      "attack",
      "inconspicious",
    ],
    descriptions: [
      {
        type: "text",
        content:
          "As a free card action, a unit with the Distract keyword can choose an enemy trooper unit at {range_2} and in LOS. Until the end of the round, when the chosen enemy unit performs an attack, it must attack the unit that used the Distract action, if able.",
      },
      {
        type: "text",
        content:
          "While the chosen enemy unit is attacking the unit with the Distract keyword, each miniature in the enemy unit must choose an eligible weapon to contribute to an attack pool. The enemy unit may only declare additional defenders and form additional dice pools if, after first forming a dice pool with eligible weapons, there are still weapons usable by miniatures in the unit that were not eligible to be added to the first attack pool.",
      },
      {
        type: "text",
        content:
          "When a unit uses the Distract keyword, if it had the {keyword:Inconspicuous} keyword, it loses it until the end of the round.",
      },
    ],
  },
  {
    keyword: "divine_influence",
    name: "Divine Influence",
    range: "range_1",
    activation: "",
    parents: ["d", "units"],
    tag: "Unit Keyword",
    related_keywords: ["guardian"],
    descriptions: [
      {
        type: "text",
        content:
          "While they are at {range_1} of a friendly C-3PO, friendly {faction_ewoks} trooper units gain {keyword:Guardian 2}: C-3PO. While using {keyword:Guardian}, they may cancel {hit_critical} results as if they were {hit} results.",
      },
    ],
  },
  {
    keyword: "divulge",
    name: "Divulge",
    activation: "",
    parents: ["d"],
    tag: "Command Card Keyword",
    related_keywords: ["command_phase"],
    descriptions: [
      {
        type: "text",
        content:
          "Some Command Cards have the Divulge keyword. Command Cards that contain the Divulge keyword are divided by a horizontal line, which serves to visually separate the Divulge keyword effect from the normal Command Card effect. Some Divulge cards have multiple options, in this case the player must pick one. These cards can be revealed at the start of the phase or step indicated by the Divulge keyword. If a card is revealed in this manner, resolve the text that follows the Divulge keyword.",
      },
      {
        type: "text",
        content:
          "A card that is revealed in this way is not played and is returned to that player’s command hand at the end of the step in which it was divulged. Players can divulge as many Command Cards as they wish. If both players have Command Cards that are divulged at the same time, the blue player can reveal their Command Card first. If this opportunity is declined, that card can no longer be divulged.",
      },
    ],
  },
  {
    keyword: "djem_so_mastery",
    name: "Djem So Mastery",
    activation: "",
    parents: ["d", "units"],
    tag: "Unit Keyword",
    related_keywords: ["melee", "attack"],
    descriptions: [
      {
        type: "text",
        content:
          "When a unit with the Djem So Mastery keyword is defending against a melee attack, during the Compare Results step, the attacking unit suffers a wound if the attack roll contains one or more blank results.",
      },
    ],
  },
  {
    keyword: "droid_trooper",
    name: "Droid Trooper",
    parents: ["d"],
    related_keywords: [
      "troopers",
      "barricades",
      "miniature",
      "unit",
      "cover",
      "suppression",
      "poison",
    ],
    descriptions: [
      {
        type: "structured_list",
        content: [
          "Droid troopers cannot be suppressed, though they can still be panicked.",
          "Droid troopers cannot gain or resolve poison tokens.",
        ],
      },
    ],
  },
  {
    keyword: "dodge",
    name: "Dodge",
    activation: "",
    parents: ["d"],
    summary:
      "The unit gains a dodge token, which allows it to cancel incoming results when defending.",
    related_keywords: [
      "actions",
      "attack",
      "dice",
      "cover",
      "clone_trooper",
      "ground_vehicles",
    ],
    descriptions: [
      {
        type: "illustration",
        content: "tokens/dodge.png",
        align: "right",
        altText: "A green 8-sided token.",
        width: "80",
      },
      {
        type: "text",
        content:
          "A unit that performs a dodge action gains a dodge token. Units may spend dodge tokens to cancel a results during attacks.",
      },
      {
        type: "header",
        content: "Apply Dodge and Cover",
      },
      {
        type: "text",
        content:
          "<strong>Apply Dodge:</strong> If the defending unit has one or more dodge tokens, the defending player may spend any number of them. For each dodge token spent, cancel one a result in the attack pool. Units may spend dodge tokens even if there are no a results in the attack pool.",
      },
    ],
  },
  {
    keyword: "declare_defender",
    name: "Declare Defender",
    activation: "",
    parents: ["d"],
    summary: "",
    related_keywords: ["attack", "line_of_sight", "unit"],
    descriptions: [
      {
        type: "text",
        content:
          "The first stage in the attack sequence is choosing an enemy unit to attack. The attacking player declares they are performing an attack action with their unit against an enemy unit, which becomes the defending unit.",
      },
      {
        type: "text",
        content:
          "Then, measuring from the attacking unit’s unit leader, the attacking player checks to see that the defending unit is at range of at least one of the attacking unit’s weapons and has at least one miniature in LOS to the attacking unit leader.",
      },
      {
        type: "text",
        content:
          "If either of these conditions cannot be met, the attack or attack action cannot be made.",
      },
      {
        type: "example",
        content: [
          { type: "header", content: "Example: Declare Defender" },
          {
            type: "illustration",
            content: "examples/declare-defender.png",
            align: "center",
            altText: "A droid unit at range 3 of Obi-Wan and Clone troopers.",
          },
          {
            type: "text",
            content:
              "Sarah has declared an attack action with her unit of Battle Droids. The first step of the attack sequence is to declare a defender. Measuring from the Battle Droids’ unit leader, Sarah chooses an enemy unit that is in range of at least one of the Battle Droid’s weapons and that has at least 1 miniature in LOS. In this case, since the Battle Droids’ weapons are {range_1}–{range_3}, Sarah must choose an enemy unit at {range_3} of the Battle Droids’ unit leader that is also in LOS. Since the Battle Droid unit leader has LOS to both Obi-Wan Kenobi and the Clone Troopers, and both are in range of at least 1 of the Battle Droids’ weapons, Sarah can choose either as the defending unit.",
          },
        ],
      },
    ],
  },
  {
    keyword: "duelist",
    name: "Duelist",
    activation: "",
    parents: ["d", "units"],
    tag: "Unit Keyword",
    related_keywords: [
      "melee",
      "attack",
      "aim",
      "dodge",
      "pierce",
      "apply_dodge_cover",
      "immune",
    ],
    descriptions: [
      {
        type: "text",
        content:
          "When a unit with the Duelist keyword performs a melee attack, if it spends one or more aim tokens during the Reroll Attack Dice step, the attack pool gains the {keyword:Pierce 1} weapon keyword. While a unit with the Duelist keyword defends against a melee attack, if it spends at least one dodge token during the Apply Dodge and Cover step, it gains the {keyword:Immune: Pierce} keyword.",
      },
      {
        type: "text",
        content:
          "The unit with the Duelist keyword gets these effects in addition to the normal effects of spending aim or dodge tokens.",
      },
    ],
  },
];