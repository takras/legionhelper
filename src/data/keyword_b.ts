import { Keyword } from "@/types";

export const KeywordsB: Keyword[] = [
  {
    keyword: "backup",
    name: "Backup",
    activation: "",
    parents: ["b"],
    summary:
      "When a unit that is benefiting from backup is attacked by a ranged attack and the attacking unit’s unit leader is beyond {range_2} of it, it may cancel up to two {hit} results during the Modify Attack Dice step of the attack sequence.",
    related_keywords: ["attack", "line_of_sight", "troopers", "suppression"],
    descriptions: [
      {
        type: "text",
        content:
          "A trooper unit with the {rank_commander} or {rank_operative} rank benefits from backup if it is at {range_half} and has LOS to the unit leader of a unit that provides backup. A unit must meet the following requirements to provide backup:",
      },
      {
        type: "structured_list",
        content: [
          "The unit has the {rank_corps} rank.",
          "The unit is a trooper unit.",
          "The unit does not have a number of suppression tokens equal to or greater than its courage.",
        ],
      },
      {
        type: "text",
        content:
          "When a unit that is benefiting from backup is attacked by a ranged attack and the attacking unit’s unit leader is beyond {range_2} of it, it may cancel up to two {hit} results during the Modify Attack Dice step of the attack sequence.",
      },
    ],
  },
  {
    keyword: "bane_tokens",
    name: "Bane Tokens",
    activation: "",
    parents: ["b"],
    range: "range_1",
    related_keywords: ["charge", "deploy", "battlefield"],
    summary: "",
    descriptions: [
      {
        type: "text",
        content:
          "Cad Bane has a set of three unique Bane tokens that he can place on the battlefield. Bane tokens are double-sided, with a uniform back and three different images on the front, each linked to a unique effect.",
      },
      {
        type: "text",
        content:
          "Bane tokens must be placed facedown on the battlefield and cannot overlap objective or advantage tokens. Bane tokens are enemy effects. Each player may only have one copy of each different Bane token on the battlefield at the same time.",
      },
      {
        type: "text",
        content:
          "When an enemy miniature moves, deploys, or is placed at {range_1} of an enemy Bane token, if that miniature has LOS to the token, it is revealed. Miniatures can move through but not overlap Bane tokens. When a Bane token is revealed, it has one of the following effects:",
      },
      {
        type: "text",
        content:
          "<strong>Here I Am:</strong> If Cad Bane is not on the battlefield and is not defeated, his Here I Am token is replaced by his miniature. Then, Cad Bane issues himself an order.",
      },
      {
        type: "illustration",
        content: "tokens/cad-here-i-am.png",
        width: "80",
        altText: "Bane token showing Cad Bane face",
        align: "center",
      },
      {
        type: "structured_list",
        content: [
          "If Cad Bane is on the battlefield, his Here I Am token is replaced by his miniature. Any tokens assigned to Cad Bane remain assigned to him.",
          "If Cad Bane is defeated, the token is removed.",
          "At the start of each round, starting with the blue player, a player may reveal a friendly Here I Am token and resolve it.",
        ],
      },
      {
        type: "text",
        content: "<strong>Smoke and Mirrors:</strong> The token is removed.",
      },
      {
        type: "illustration",
        content: "tokens/cad-smoke.png",
        width: "80",
        altText: "Bane token showing blank inside.",
        align: "center",
      },
      {
        type: "text",
        content:
          "<strong>Kablamo!:</strong> The token detonates using the weapon profile on Cad Bane’s I Make the Rules Now Command Card, then the token is removed.",
      },
      {
        type: "illustration",
        content: "tokens/cad-kablamo.png",
        width: "80",
        altText: "Bane token showing eplosion.",
        align: "center",
      },
    ],
  },
  {
    keyword: "barrage",
    name: "Barrage",
    activation: "",
    parents: ["b", "units"],
    tag: "Unit Keyword",
    related_keywords: ["attack", "arsenal_x"],
    summary: "",
    descriptions: [
      {
        type: "text",
        content:
          "If a unit has the Barrage keyword, it may make two attack actions instead of one if it does not use the Arsenal keyword during its activation.",
      },
    ],
  },
  {
    keyword: "barricades",
    name: "Barricades",
    parents: ["b", "concepts"],
    related_keywords: [
      "terrain_cover",
      "terrain_height",
      "terrain_height",
      "terrain",
      "terrain_movement",
    ],
    descriptions: [
      {
        type: "text",
        content:
          "Barricades are a specific type of scatter terrain found in some Star Wars: Legion Core Sets and in their own expansion pack. Barricades are open terrain and provide trooper units that are not creature troopers with heavy cover.",
      },
      {
        type: "text",
        content:
          "Barricades cannot be placed overlapping objective or advantage tokens and cannot have objective or advantage tokens placed on them. A trooper miniature can never partially overlap a barricade at any time.",
      },
      {
        type: "illustration",
        content: "examples/barricades.png",
        align: "center",
        altText: "Three barricades on the battlefield",
      },
    ],
  },
  {
    keyword: "base",
    name: "Bases and Base Contact",
    parents: ["b", "concepts"],
    related_keywords: [
      "miniature",
      "troopers",
      "melee",
      "terrain",
      "fitting_on_terrain",
      "silhouettes",
    ],
    descriptions: [
      {
        type: "text",
        content:
          "Each miniature in <i>Star Wars</i>: Legion is modeled on a base. A unit’s base depends on its unit type: troopers, clone troopers, droid troopers, and Wookiee troopers are on small bases. Everything else is on notched bases of various sizes.",
      },
      {
        type: "illustration",
        content: "examples/base.png",
        align: "center",
        altText: "One Clone trooper and one AT-RT on the battlefield.",
      },
      {
        type: "text",
        content:
          "Many rules in <i>Star Wars</i>: Legion use the term “base contact,” which means that the miniature's base must be touching whatever the rule is referencing. This includes another miniature’s base, a piece of terrain, or a token.",
      },
      {
        type: "text",
        content:
          "Miniatures cannot move into base contact with miniatures from enemy units unless the unit leader has a melee weapon ({range_melee}). If the unit leader does, the unit leader can perform a move into base contact with an enemy miniature to start a melee.",
      },
      {
        type: "reference",
        showOnlySummary: true,
        referenced_keyword: "melee",
      },
      {
        type: "text",
        content:
          "Because an object can be placed on top of uneven terrain, there are situations in which another miniature cannot be placed into physical base contact with the object because of a difference in elevation between the two bases. In these situations, if the following two conditions are met, the miniature and object are treated as if they are in base contact: when viewed from above, there is no space between the miniature's base and the object, such that if they were not on differing elevations or were both flat on the battlefield, the miniature's base and the object would be touching, and the vertical distance between the miniature's base and the object is no greater than the height of either object's silhouette.",
      },
      {
        type: "reference",
        showOnlySummary: true,
        referenced_keyword: "silhouettes",
      },
      {
        type: "illustration",
        content: "examples/base-contact.png",
        align: "center",
        altText:
          "One Clone trooper and one Droid trooper with bases physically touhcing.",
      },
    ],
  },
  {
    keyword: "beam_x",
    name: "Beam X",
    related_keywords: [
      "range",
      "attack",
      "line_of_sight",
      "ranged_weapon",
      "gunslinger",
    ],
    tag: "Weapon Keyword",
    range: "range_1",
    parents: ["b", "weapons"],
    descriptions: [
      {
        type: "text",
        content:
          "During the Declare Additional Defender step, if a weapon with the Beam X keyword is in a unit’s attack pool, that unit may declare up to X additional attacks forming attack pools using only the weapon with the Beam X keyword, even though the weapon has already been added to an attack pool. These additional attacks do not generate further attacks.",
      },
      {
        type: "text",
        content:
          "Each additional attack must be against a different defending unit that is at {range_1} of the last defending unit declared. These additional attacks must be in LOS of the attacking unit but may be beyond the maximum range of the weapon with the Beam X keyword.",
      },
      {
        type: "text",
        content:
          "Units may not use the Beam X and {keyword:Gunslinger} keywords during the same attack.",
      },
    ],
  },
  {
    keyword: "battle_cards",
    name: "Battle Cards",
    activation: "",
    parents: ["b", "concepts"],
    related_keywords: [
      "setup",
      "objective_cards",
      "map_cards",
      "secondary_objective_cards",
      "advantage_cards",
    ],
    descriptions: [
      {
        type: "text",
        content:
          "Battle Cards form a Battle Deck and are used in Setup, where players work together to build the mission for that game. Battle Cards are divided into three categories: Objective Cards that have a paired Map Card (Red), Secondary Objective Cards (Yellow), and Advantage Cards (Green).",
      },
      { type: "reference", referenced_keyword: "objective_cards" },
      { type: "reference", referenced_keyword: "map_cards" },
      { type: "reference", referenced_keyword: "secondary_objective_cards" },
      { type: "reference", referenced_keyword: "advantage_cards" },
    ],
  },
  {
    keyword: "battlefield",
    name: "Battlefield",
    related_keywords: ["objects"],
    parents: ["b", "concepts"],
    descriptions: [
      {
        type: "reference",
        referenced_keyword: "objects",
      },
    ],
  },
  {
    keyword: "blast",
    name: "Blast",
    related_keywords: ["apply_dodge_cover", "cover"],
    parents: ["b", "weapons"],
    tag: "Weapon Keyword",
    descriptions: [
      {
        type: "text",
        content:
          "During the Apply Cover step, a defending unit cannot use light or heavy cover to cancel hit {hit} results produced by an attack pool that contains dice added by a weapon with the Blast keyword.",
      },
    ],
  },

  {
    keyword: "block",
    name: "Block",
    activation: "",
    parents: ["b", "units"],
    tag: "Unit Keyword",
    related_keywords: ["attack", "dodge", "apply_dodge_cover", "dodge"],
    summary: "",
    descriptions: [
      {
        type: "text",
        content:
          "When a unit with the Block keyword is defending, if it spends any dodge tokens during the Apply Dodge and Cover step, it gains {block_surge}:{block}.",
      },
    ],
  },
  {
    keyword: "bolster_x",
    name: "Bolster X",
    activation: "",
    parents: ["b", "units"],
    tag: "Unit Keyword",
    related_keywords: ["actions", "apply_dodge_cover"],
    range: "range_2",
    summary: "",
    descriptions: [
      {
        type: "text",
        content:
          "As a card action, a unit with the Bolster X keyword can choose up to X friendly units at {range_2} to each gain one surge token.",
      },
    ],
  },
  {
    keyword: "bounty",
    name: "Bounty",
    activation: "",
    parents: ["b", "units"],
    tag: "Unit Keyword",
    related_keywords: ["setup", "unit"],
    summary: "",
    descriptions: [
      {
        type: "text",
        content:
          "During Setup, a unit with the Bounty keyword chooses an enemy {rank_operative} or {rank_commander} unit. The chosen unit gains a bounty token. After a friendly unit with the Bounty keyword defeats an enemy unit that has one or more bounty tokens with an attack or effect, the friendly unit’s controlling player scores 1 VP.",
      },
    ],
  },
];
