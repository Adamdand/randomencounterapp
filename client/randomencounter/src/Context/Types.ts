/* eslint-disable camelcase */
import { string } from "yup/lib/locale";

export enum Steps {
  welcome = "Welcome",
  customerInformation = "Customer Information",
}

export interface ICustomerInfo {
  FirstName: string;
  LastName: string;
  Phone: string;
  Email: string;
}

// New Data Types
export interface IUserData {
  Email: string;
  Name: string;
  Password: string;
  ConfirmPassword: string;
  CharacterList: ICharacter[];
}

export interface ICharacterStats {
  Strength: IStats;
  Dexterity: IStats;
  Constitution: IStats;
  Intelligence: IStats;
  Wisdom: IStats;
  Charisma: IStats;
}
export interface ICharacter {
  Name: string;
  Level: number;
  Race: string;
  Class: string;
  UrlString: string;
  Stats: ICharacterStats;
}

export interface IStatSelection {
  Name: string;
  Value: number;
}

export interface IStats {
  name: string;
  base: number;
  race: number;
  bonus: number;
  total: number;
}

export const RaceTypes = [
  {
    race: "Human",
    description: "versatile people, lots of customization options",
    statBonus: {
      Strength: 1,
      Dexterity: 1,
      Constitution: 1,
      Intelligence: 1,
      Wisdom: 1,
      Charisma: 1,
    },
  },
  {
    race: "Dwarf",
    description: " sturdy warriors, resistant to poison",
    statBonus: {
      Strength: 2,
      Dexterity: 0,
      Constitution: 2,
      Intelligence: 0,
      Wisdom: 0,
      Charisma: 0,
      Any: 0,
    },
  },
  {
    race: "Gnome",
    description: "cunning inventors, good at resisting magic",
    statBonus: {
      Strength: 0,
      Dexterity: 1,
      Constitution: 0,
      Intelligence: 2,
      Wisdom: 0,
      Charisma: 0,
    },
  },
  {
    race: "Elf",
    description: "graceful and long-lived, resistant to charm, immune to sleep",
    statBonus: {
      Strength: 0,
      Dexterity: 2,
      Constitution: 0,
      Intelligence: 1,
      Wisdom: 0,
      Charisma: 0,
    },
  },
  {
    race: "Half-Elf",
    description: "Elven grace with human versatility, gain extra skills",
    statBonus: {
      Strength: 0,
      Dexterity: 0,
      Constitution: 0,
      Intelligence: 1,
      Wisdom: 0,
      Charisma: 2,
    },
  },
  {
    race: "Half-Orc",
    description: "fierce and intimidating warriors, hard to knock down",
    statBonus: {
      Strength: 2,
      Dexterity: 0,
      Constitution: 1,
      Intelligence: 0,
      Wisdom: 0,
      Charisma: 0,
    },
  },
  {
    race: "Halfling",
    description: "small and speedy, lucky",
    statBonus: {
      Strength: 0,
      Dexterity: 2,
      Constitution: 0,
      Intelligence: 0,
      Wisdom: 1,
      Charisma: 0,
    },
  },
  {
    race: "Dragonborn",
    description:
      "have dragon blood of some kind, can breathe fire (or ice, acid, or lightning)",
    statBonus: {
      Strength: 2,
      Dexterity: 0,
      Constitution: 0,
      Intelligence: 0,
      Wisdom: 0,
      Charisma: 1,
    },
  },
  {
    race: "Tiefling",
    description: "demonic heritage, fire resistance",
    statBonus: {
      Strength: 0,
      Dexterity: 0,
      Constitution: 0,
      Intelligence: 1,
      Wisdom: 0,
      Charisma: 2,
    },
  },
];

export interface IRaceOptions {
  race: string;
  description: string;
  statBonus: ICharacterStats;
}

export const ClassTypes = [
  {
    class: "Barbarian",
    description: "description",
    urlString: "/images/barbIcon.png",
  },
  {
    class: "Bard",
    description: "description",
    urlString: "/images/bardIcon.png",
  },
  {
    class: "Cleric",
    description: "description",
    urlString: "/images/claricIcon.png",
  },
  {
    class: "Druid",
    description: "description",
    urlString: "/images/druidIcon.png",
  },
  {
    class: "Fighter",
    description: "description",
    urlString: "/images/fighterIcon.png",
  },
  {
    class: "Monk",
    description: "description",
    urlString: "/images/monkIcon.png",
  },
  {
    class: "Paladin",
    description: "description",
    urlString: "/images/palyIcon.png",
  },
  {
    class: "Ranger",
    description: "description",
    urlString: "/images/rangerIcon.png",
  },
  {
    class: "Rogue",
    description: "description",
    urlString: "/images/rogueIcon.png",
  },
  {
    class: "Sorcerer",
    description: "description",
    urlString: "/images/sorcIcon.png",
  },
  {
    class: "Warlock",
    description: "description",
    urlString: "/images/warlockIcon.png",
  },
  {
    class: "Wizard",
    description: "description",
    urlString: "/images/wizardIcon.png",
  },
];

export interface IClassOptions {
  class: string;
  description: string;
  urlString: string;
}

export interface IMonster {
  index: string;
  name: string;
  url: string;
}

export interface IMonsterList {
  count: number;
  results: IMonster[];
}

export interface IProficiencies {
  value: number;
  proficiency: {
    index: string;
    name: string;
    url: string;
  };
}

export interface IDamage {
  damage_type: {
    name: string;
    url: string;
  };
  damage_dice: string;
  damage_bonus: number;
}

export interface IActions {
  name: string;
  desc: string;
  attack_bonus?: number;
  dc?: {
    dc_type?: {
      name: string;
      url: string;
    };
    dc_value?: number;
    success_type?: string;
  };
  damage?: IDamage[];
}

export interface IMonsterDetails {
  index: string;
  name: string;
  size: string;
  type: string;
  subtype: string | null;
  alignment: string | null;
  armor_class: number;
  hit_points: number;
  hit_dice: string;
  speed: ISpeed;
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  proficiencies?: IProficiencies[];
  damage_vulnerabilities: string[];
  damage_resistances: string[];
  damage_immunities: string[];
  condition_immunities: string[];
  senses?: {
    darkvision?: string;
    passive_perception?: number;
  };
  languages?: string[];
  challenge_rating: number;
  special_abilities: IActions[];
  actions: IActions[];
  legendary_actions?: IActions[];
  url: string;
  xp: number;
}

export interface ISpeed {
  walk: string;
  swim?: string;
}

export interface playerDetails {
  firstName: string;
  lastName: string;
}

export interface IRandomMonster {
  quantity: number;
  index: string;
  name: string;
  url: string;
}

export interface IPlayer {
  index?: number | null;
  type: string;
  characterName: string;
  characterAC: number | null;
  characterInitative: number;
  characterHealth: number | null;
  characterMaxHealth: number | null;
  characterLevel: number | null;
  successSaves: number;
  failSaves: number;
}
