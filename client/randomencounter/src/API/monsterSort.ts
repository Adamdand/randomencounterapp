import { IMonsterEnvironments } from "../Context/Types";

export const monsterRegions = [
  "All",
  "Cities",
  "Caves",
  "Ruines",
  "Plains",
  "Mountains",
  "Deserts",
  "Swamps",
  "Lakes",
  "Rivers",
  "Oceans",
];

export const allMonstersEnv = [
  {
    name: "Aboleth",
    environments: ["All", "Lakes", "Ruines", "Oceans", "Caves"],
  },
  {
    name: "Acolyte",
    environments: [
      "All",
      "Caves",
      "Cities",
      "Deserts",
      "Hell",
      "Mountains",
      "Plains",
      "Ruines",
      "Snow",
      "Swamps",
      "Volcanoes",
    ],
  },
  {
    name: "Adult Black Dragon",
    environments: ["All", "Swamps", "Forests", "Caves"],
  },
  {
    name: "Adult Blue Dragon",
    environments: ["All", "Caves", "Deserts", "Caves"],
  },
  {
    name: "Adult Brass Dragon",
    environments: ["All", "Ruines", "Caves", "Deserts"],
  },
  { name: "Adult Bronze Dragon", environments: ["All", "Oceans", "Caves"] },
  {
    name: "Adult Copper Dragon",
    environments: ["All", "Mountains", "Deserts", " Plains"],
  },
  {
    name: "Adult Gold Dragon",
    environments: ["All", "Lakes", "Rivers", "Ruines", "Caves"],
  },
  {
    name: "Adult Green Dragon",
    environments: ["All", "Plains", "Forests", "Caves"],
  },
  {
    name: "Adult Red Dragon",
    environments: ["All", "Plains", "Mountains", "Cave"],
  },
  { name: "Adult Silver Dragon", environments: ["All", "Mountains", "Caves"] },
  {
    name: "Adult White Dragon",
    environments: ["All", "Mountains", "Caves", "Snow"],
  },
  { name: "Air Elemental", environments: ["All", "Plains", "Mountains"] },
  {
    name: "Ancient Black Dragon",
    environments: ["All", "Swamps", "Forests", "Caves"],
  },
  {
    name: "Ancient Blue Dragon",
    environments: ["All", "Caves", "Deserts", "Caves"],
  },
  {
    name: "Ancient Brass Dragon",
    environments: ["All", "Ruines", "Caves", "Deserts"],
  },
  { name: "Ancient Bronze Dragon", environments: ["All", "Oceans", "Caves"] },
  {
    name: "Ancient Copper Dragon",
    environments: ["All", "Mountains", "Deserts", " Plains"],
  },
  {
    name: "Ancient Gold Dragon",
    environments: ["All", "Lakes", "Rivers", "Ruines", "Caves"],
  },
  {
    name: "Ancient Green Dragon",
    environments: ["All", "Plains", "Forests", "Caves"],
  },
  {
    name: "Ancient Red Dragon",
    environments: ["All", "Plains", "Mountains", "Cave"],
  },
  {
    name: "Ancient Silver Dragon",
    environments: ["All", "Mountains", "Caves"],
  },
  {
    name: "Ancient White Dragon",
    environments: ["All", "Mountains", "Caves", "Snow"],
  },
  {
    name: "Androsphinx",
    environments: ["All", "Mountains", "Plains", "Desert"],
  },
  {
    name: "Animated Armor",
    environments: ["All", "Cities", "Ruines", "Caves", "Swamps"],
  },
  { name: "Ankheg", environments: ["All", "Deserts", "Caves"] },
  { name: "Ape", environments: ["All", "Forests"] },
  { name: "Archmage", environments: ["All", "Cities", "Ruines", "Swamps"] },
  { name: "Assassin", environments: ["All", "Cities", "Ruins", "Swamps"] },
  { name: "Awakened Shrub", environments: ["All", "Forests"] },
  { name: "Awakened Tree", environments: ["All", "Forests"] },
  { name: "Axe Beak", environments: ["All", "Forests"] },
  { name: "Azer", environments: ["All", "Volcanoes", "Hell"] },
  { name: "Baboon", environments: ["All", "Forests"] },
  { name: "Badger", environments: ["All", "Forests", "Plains"] },
  { name: "Balor", environments: ["All", "Volcanoes", "Caves", "Hell"] },
  { name: "Bandit", environments: ["All", "Cities", "Ruines", "Caves"] },
  {
    name: "Bandit Captain",
    environments: ["All", "Cities", "Ruines", "Caves"],
  },
  { name: "Barbed Devil", environments: ["All", "Volcanoes", "Hell"] },
  { name: "Basilisk", environments: ["All", "Volcanoes", "Desert"] },
  {
    name: "Bat",
    environments: ["All", "Caves", "Forests", "Deserts", "Swamps"],
  },
  { name: "Bearded Devil", environments: ["All", "Deserts"] },
  { name: "Behir", environments: ["All", "Caves", "Volcanoes", "Plains"] },
  { name: "Berserker", environments: ["All", "Plains", "Deserts"] },
  { name: "Black Bear", environments: ["All", "Forests", "Mountains"] },
  {
    name: "Black Dragon Wyrmling",
    environments: ["All", "Swamps", "Forests", "Caves"],
  },
  { name: "Black Pudding", environments: ["All", "Swamps"] },
  { name: "Blink Dog", environments: ["All", "Hell", "Volcanoes", "Swamps"] },
  { name: "Blood Hawk", environments: ["All", "Forests"] },
  {
    name: "Blue Dragon Wyrmling",
    environments: ["All", "Caves", "Deserts", "Caves"],
  },
  { name: "Boar", environments: ["All", "Forests"] },
  { name: "Bone Devil", environments: ["All", "Hell", "Volcanoes"] },
  {
    name: "Brass Dragon Wyrmling",
    environments: ["All", "Ruines", "Caves", "Deserts"],
  },
  { name: "Bronze Dragon Wyrmling", environments: ["All", "Oceans", "Caves"] },
  {
    name: "Brown Bear",
    environments: ["All", "Forests", "Caves", "Mountains"],
  },
  { name: "Bugbear", environments: ["All", "Forests", "Caves"] },
  { name: "Bulette", environments: ["All", "Caves"] },
  { name: "Camel", environments: ["All", "Mountains"] },
  { name: "Cat", environments: ["All", "Cities", "Forests"] },
  { name: "Centaur", environments: ["All", "Forests", "Plains"] },
  { name: "Chain Devil", environments: ["All", "Hell", "Volcanoes"] },
  {
    name: "Chimera",
    environments: ["All", "Volcanoes", "Caves", "Plains", "Mountains"],
  },
  { name: "Chuul", environments: ["All", "Ocean"] },
  { name: "Clay Golem", environments: ["All", "Caves", "Mountains"] },
  { name: "Cloaker", environments: ["All", "Caves"] },
  { name: "Cloud Giant", environments: ["All", "Mountains"] },
  { name: "Cockatrice", environments: ["All", "Mountains", "Caves"] },
  { name: "Commoner", environments: ["All", "Cities", "Ruines", "Plains"] },
  { name: "Constrictor Snake", environments: ["All", "Forests"] },
  {
    name: "Copper Dragon Wyrmling",
    environments: ["All", "Mountains", "Deserts", " Plains"],
  },
  { name: "Couatl", environments: ["All", "Forests"] },
  { name: "Crab", environments: ["All", "Oceans", "Lakes"] },
  {
    name: "Crocodile",
    environments: ["All", "Oceans", "Lakes", "Rivers", "Swamps"],
  },
  {
    name: "Cult Fanatic",
    environments: ["All", "Swamps", "Ruines", "Cities", "Caves"],
  },
  {
    name: "Cultist",
    environments: ["All", "Swamps", "Ruines", "Cities", "Caves"],
  },
  { name: "Darkmantle", environments: ["All", "Oceans"] },
  { name: "Death Dog", environments: ["All", "Hell", "Volanoes"] },
  {
    name: "Deep Gnome (Svirfneblin)",
    environments: ["All", "Caves", "Ruines"],
  },
  { name: "Deer", environments: ["All", "Forests"] },
  { name: "Deva", environments: ["All", "Mountains"] },
  { name: "Dire Wolf", environments: ["All", "Forests", "Mountains"] },
  { name: "Djinni", environments: ["All", "Mountains", "Ruines"] },
  { name: "Doppelganger", environments: ["All", "Ruines", "Caves", "Cities"] },
  { name: "Draft Horse", environments: ["All", "Cities", "Forests"] },
  { name: "Dragon Turtle", environments: ["All", "Oceans", "Lakes"] },
  { name: "Dretch", environments: ["All", "Hell"] },
  { name: "Drider", environments: ["All", "Forests", "Caves"] },
  { name: "Drow", environments: ["All", "Forests", "Riveres"] },
  { name: "Druid", environments: ["All", "Forests", "Riveres"] },
  { name: "Dryad", environments: ["All", "Forests", "Rivers"] },
  { name: "Duergar", environments: ["All", "Caves", "Cities", "Mountains"] },
  { name: "Dust Mephit", environments: ["All", "Hell"] },
  { name: "Eagle", environments: ["All", "Mountains"] },
  { name: "Earth Elemental", environments: ["All", "Mountains", "Caves"] },
  { name: "Efreeti", environments: ["All", "Hell", "Volcanoes"] },
  { name: "Elephant", environments: ["All", "Deserts"] },
  { name: "Elk", environments: ["All", "Forests"] },
  { name: "Erinyes", environments: ["All", "Mountains", "Hell", "Volcanoes"] },
  { name: "Ettercap", environments: ["All", "Swamps", "Hell"] },
  { name: "Ettin", environments: ["All", "Caves", "Plains", "Forests"] },
  {
    name: "Fire Elemental",
    environments: ["All", "Volcanoes", "Hell", "Deserts"],
  },
  {
    name: "Fire Giant",
    environments: [
      "All",
      "Volcanoes",
      "Deserts",
      "Plains",
      "Mountains",
      "Caves",
    ],
  },
  {
    name: "Flesh Golem",
    environments: ["All", "Caves", "Mountains", "Swamps"],
  },
  {
    name: "Flying Snake",
    environments: ["All", "Deserts", "Caves", "Forests", "Swamps", "Ruines"],
  },
  { name: "Flying Sword", environments: ["All", "Caves", "Ruines", "Cities"] },
  {
    name: "Frog",
    environments: ["All", "Swamps", "Rivers", "Lakes", "Forests"],
  },
  { name: "Frost Giant", environments: ["All", "Snow", "Mountains", "Caves"] },
  { name: "Gargoyle", environments: ["All", "Mountains", "Caves", "Ruines"] },
  {
    name: "Gelatinous Cube",
    environments: ["All", "Ruines", "Caves", "Swamp"],
  },
  { name: "Ghast", environments: ["All", "Swamp", "Caves", "Hell"] },
  {
    name: "Ghost",
    environments: ["All", "Swamp", "Caves", "Hell", "Cities", "Ruines"],
  },
  { name: "Ghoul", environments: ["All", "Caves", "Swamps", "Hell", "Ruines"] },
  { name: "Giant Ape", environments: ["All", "Forests"] },
  { name: "Giant Badger", environments: ["All", "Forests", "Plains"] },
  { name: "Giant Bat", environments: ["All", "Caves", "Forests", "Ruines"] },
  { name: "Giant Boar", environments: ["All", "Forests", "Plains"] },
  { name: "Giant Centipede", environments: ["All", "Caves", "Hell"] },
  {
    name: "Giant Constrictor Snake",
    environments: ["All", "Corrests", "Caves", "Rivers"],
  },
  { name: "Giant Crab", environments: ["All", "Rivers", "Lakes", "Oceans"] },
  {
    name: "Giant Crocodile",
    environments: ["All", "Rivers", "Lakes", "Oceans"],
  },
  { name: "Giant Eagle", environments: ["All", "Mountains"] },
  { name: "Giant Elk", environments: ["All", "Forests"] },
  {
    name: "Giant Fire Beetle",
    environments: ["All", "Volcanoes", "Hell", "Caves"],
  },
  { name: "Giant Frog", environments: ["All", "Lakes", "Rivers"] },
  { name: "Giant Goat", environments: ["All", "Mountains", "Plains"] },
  { name: "Giant Hyena", environments: ["All", "Deserts"] },
  { name: "Giant Lizard", environments: ["All", "Deserts", "Caves"] },
  { name: "Giant Octopus", environments: ["All", "Oceans", "Lakes"] },
  { name: "Giant Owl", environments: ["All", "Forests", "Mountains"] },
  {
    name: "Giant Poisonous Snake",
    environments: ["All", "Forests", "Deserts", "Swamps", "Ruines"],
  },
  {
    name: "Giant Rat",
    environments: ["All", "Swamps", "Cities", "Caves", "Ruines"],
  },
  {
    name: "Giant Rat (Diseased)",
    environments: ["All", "Swamps", "Cities", "Ruines"],
  },
  { name: "Giant Scorpion", environments: ["All", "Deserts"] },
  { name: "Giant Sea Horse", environments: ["All", "Oceans"] },
  { name: "Giant Shark", environments: ["All", "Oceans"] },
  { name: "Giant Spider", environments: ["All", "Forests", "Caves", "Ruines"] },
  { name: "Giant Toad", environments: ["All", "Swamps", "Forests"] },
  { name: "Giant Vulture", environments: ["All", "Deserts"] },
  { name: "Giant Wasp", environments: ["All", "Deserts", "Forests", "Plains"] },
  { name: "Giant Weasel", environments: ["All", "Plains", "Forests"] },
  {
    name: "Giant Wolf Spider",
    environments: ["All", "Caves", "Forests", "Ruines"],
  },
  { name: "Gibbering Mouther", environments: ["All", "Hell", "Caves"] },
  { name: "Glabrezu", environments: ["All", "Hell"] },
  { name: "Gladiator", environments: ["All", "Cities", "Ruines"] },
  {
    name: "Gnoll",
    environments: ["All", "Ruines", "Plains", "Forests", "Deserts"],
  },
  { name: "Goat", environments: ["All", "Forests", "Plains", "Mountains"] },
  {
    name: "Goblin",
    environments: ["All", "Caves", "Forests", "Swamps", "Ruines"],
  },
  {
    name: "Gold Dragon Wyrmling",
    environments: ["All", "Lakes", "Rivers", "Ruines", "Caves"],
  },
  { name: "Gorgon", environments: ["All", "Ruines", "Caves"] },
  { name: "Gray Ooze", environments: ["All", "Ruines", "Caves", "Swamps"] },
  {
    name: "Green Dragon Wyrmling",
    environments: ["All", "Plains", "Forests", "Caves"],
  },
  { name: "Green Hag", environments: ["All", "Swamps", "Forests"] },
  { name: "Grick", environments: ["All", "Caves"] },
  { name: "Griffon", environments: ["All", "Mountains", "Plains"] },
  { name: "Grimlock", environments: ["All", "Caves", "Mountains", "Swamps"] },
  { name: "Guard", environments: ["All", "Ruines", "Cities"] },
  { name: "Guardian Naga", environments: ["All"] },
  {
    name: "Gynosphinx",
    environments: ["All", "Oceans", "Lakes", "Rivers", "Ruines"],
  },
  {
    name: "Half-Red Dragon Veteran",
    environments: ["All", "Cities", "Ruines"],
  },
  { name: "Harpy", environments: ["All", "Ruines", "Mountains", "Forests"] },
  {
    name: "Hawk",
    environments: ["All", "Deserts", "Mountains", "Forests", "Plains"],
  },
  { name: "Hell Hound", environments: ["All", "Hell", "Volcanoes"] },
  { name: "Hezrou", environments: ["All", "Hell"] },
  { name: "Hill Giant", environments: ["All", "Plains"] },
  { name: "Hippogriff", environments: ["All", "Plains", "Mountains"] },
  { name: "Hobgoblin", environments: ["All", "Plains", "Swamps", "Forests"] },
  { name: "Homunculus", environments: ["All", "Hell", "Caves"] },
  { name: "Horned Devil", environments: ["All", "Hell"] },
  { name: "Hunter Shark", environments: ["All", "Oceans"] },
  { name: "Hydra", environments: ["All", "Lakes", "Rivers", "Oceans"] },
  { name: "Hyena", environments: ["All", "Deserts"] },
  { name: "Ice Devil", environments: ["All", "Mountains", "Hell", "Snow"] },
  { name: "Ice Mephit", environments: ["All", "Moutains", "Snow"] },
  { name: "Imp", environments: ["All", "Hell"] },
  {
    name: "Invisible Stalker",
    environments: ["All", "Hell", "Caves", "Mountains"],
  },
  { name: "Iron Golem", environments: ["All", "Caves", "Mountains"] },
  { name: "Jackal", environments: ["All", "Deserts", "Plains"] },
  { name: "Killer Whale", environments: ["All", "Oceans"] },
  {
    name: "Knight",
    environments: [
      "All",
      "Cities",
      "Forests",
      "Deserts",
      "Ruines",
      "Mountains",
      "Plains",
    ],
  },
  {
    name: "Kobold",
    environments: ["All", "Deserts", "Plains", "Forests", "Ruines"],
  },
  { name: "Kraken", environments: ["All", "Oceans"] },
  { name: "Lamia", environments: ["All", "Deserts"] },
  { name: "Lemure", environments: ["All", "Swamps"] },
  { name: "Lich", environments: ["All", "Swamps", "Ruines"] },
  { name: "Lion", environments: ["All", "Deserts"] },
  { name: "Lizard", environments: ["All", "Desesrts", "Caves", "Forests"] },
  { name: "Lizardfolk", environments: ["All", "Deserts", "Forests"] },
  { name: "Mage", environments: ["All", "Cities"] },
  { name: "Magma Mephit", environments: ["All", "Volcanoes", "Hell"] },
  { name: "Magmin", environments: ["All", "Hell"] },
  { name: "Mammoth", environments: ["All", "Snow"] },
  { name: "Manticore", environments: ["All", "Oceans"] },
  { name: "Marilith", environments: ["All", "Deserts"] },
  { name: "Mastiff", environments: ["All", "Cities"] },
  { name: "Medusa", environments: ["All", "Deserts", "Caves"] },
  { name: "Merfolk", environments: ["All", "Oceans", "Lakes"] },
  { name: "Merrow", environments: ["All", "Oceans", "Lakes"] },
  { name: "Mimic", environments: ["All", "Ruines", "Caves"] },
  { name: "Minotaur", environments: ["All", "Caves", "Plains", "Deserts"] },
  { name: "Minotaur Skeleton", environments: ["All", "Caves"] },
  { name: "Mule", environments: ["All", "Cities", "Plains"] },
  { name: "Mummy", environments: ["All", "Caves", "Ruines", "Deserts"] },
  { name: "Mummy Lord", environments: ["All", "Caves", "Ruines", "Deserts"] },
  { name: "Nalfeshnee", environments: ["All", "Hell"] },
  { name: "Night Hag", environments: ["All", "Swamps", "Forests"] },
  { name: "Nightmare", environments: ["All", "Hell"] },
  { name: "Noble", environments: ["All", "Cities"] },
  { name: "Ochre Jelly", environments: ["All", "Oceans"] },
  { name: "Octopus", environments: ["All", "Oceans"] },
  {
    name: "Ogre",
    environments: ["All", "Plains", "Caves", "Swamps", "Ruines"],
  },
  { name: "Ogre Zombie", environments: ["All", "Swamps", "Caves", "Ruines"] },
  { name: "Oni", environments: ["All", "Caves", "Ruines"] },
  {
    name: "Orc",
    environments: ["All", "Ruines", "Caves", "Forests", "Plains", "Deserts"],
  },
  { name: "Otyugh", environments: ["All", "Hell"] },
  { name: "Owl", environments: ["All", "Forests", "Mountains"] },
  { name: "Owlbear", environments: ["All", "Forests", "Ruines"] },
  { name: "Panther", environments: ["All", "Forests"] },
  { name: "Pegasus", environments: ["All", "Mountains", "Forests", "Plains"] },
  { name: "Phase Spider", environments: ["All", "Caves", "Forests"] },
  { name: "Pit Fiend", environments: ["All", "Hell"] },
  { name: "Planetar", environments: ["All", "Deserts", "Ruines"] },
  { name: "Plesiosaurus", environments: ["All", "Oceans", "Lakes"] },
  {
    name: "Poisonous Snake",
    environments: ["All", "Forests", "Plains", "Swamps", "Caves", "Ruines"],
  },
  { name: "Polar Bear", environments: ["All", "Snow", "Mountains"] },
  { name: "Pony", environments: ["All", "Cities", "Plains"] },
  { name: "Priest", environments: ["All", "Cities", "Ruines"] },
  { name: "Pseudodragon", environments: ["All", "Forests", "Caves"] },
  { name: "Purple Worm", environments: ["All", "Caves"] },
  { name: "Quasit", environments: ["All", "Hell"] },
  { name: "Quipper", environments: ["All", "Rivers", "Oceans", "Lakes"] },
  { name: "Rakshasa", environments: ["All", "Cities", "Deserts"] },
  {
    name: "Rat",
    environments: ["All", "Cities", "Ruines", "Caves", "Swamps", "Forests"],
  },
  { name: "Raven", environments: ["All", "Cities", "Plains", "Forests"] },
  {
    name: "Red Dragon Wyrmling",
    environments: ["All", "Plains", "Mountains", "Cave"],
  },
  { name: "Reef Shark", environments: ["All", "Oceans"] },
  {
    name: "Remorhaz",
    environments: ["All", "Mountains", "Caves", "Volcanoes", "Hell"],
  },
  { name: "Rhinoceros", environments: ["All", "Deserts"] },
  { name: "Riding Horse", environments: ["All", "Plains", "Cities"] },
  { name: "Roc", environments: ["All", "Mountains"] },
  { name: "Roper", environments: ["All", "Hell"] },
  { name: "Rug of Smothering", environments: ["All", "Cities", "Ruines"] },
  { name: "Rust Monster", environments: ["All", "Caves", "Volcanoes", "Hell"] },
  {
    name: "Saber-Toothed Tiger",
    environments: ["All", "Forests", "Deserts", "Mountains", "Caves"],
  },
  { name: "Sahuagin", environments: ["All", "Oceans", "Lakes"] },
  {
    name: "Salamander",
    environments: ["All", "Rivers", "Lakes", "Caves", "Swamps"],
  },
  { name: "Satyr", environments: ["All", "Plains", "Forests"] },
  { name: "Scorpion", environments: ["All", "Deserts"] },
  { name: "Scout", environments: ["All", "Cities", "Plains", "Forests"] },
  { name: "Sea Hag", environments: ["All", "Oceans", "Swamps", "Lakes"] },
  { name: "Sea Horse", environments: ["All", "Oceans"] },
  { name: "Shadow", environments: ["All", "Hell", "Caves", "Ruines"] },
  { name: "Shambling Mound", environments: ["All", "Forests", "Swamps"] },
  { name: "Shield Guardian", environments: ["All", "Cities", "Ruines"] },
  { name: "Shrieker", environments: ["All", "Caves", "Swamps"] },
  {
    name: "Silver Dragon Wyrmling",
    environments: ["All", "Mountains", "Caves"],
  },
  { name: "Skeleton", environments: ["All", "Ruines", "Swamps", "Caves"] },
  { name: "Solar", environments: ["All", "Mountains"] },
  {
    name: "Specter",
    environments: ["All", "Caves", "Ruines", "Deserts", "Cities"],
  },
  {
    name: "Spider",
    environments: ["All", "Caves", "Ruines", "Deserts", "Forests"],
  },
  { name: "Spirit Naga", environments: ["All", "Ruines", "Lakes", "Oceans"] },
  { name: "Sprite", environments: ["All", "Forests"] },
  { name: "Spy", environments: ["All", "Cities", "Forests", "Ruines"] },
  { name: "Steam Mephit", environments: ["All", "Hell", "Volcanoes", "Caves"] },
  {
    name: "Stirge",
    environments: ["All", "Hell", "Caves", "Ruines", "Forests"],
  },
  {
    name: "Stone Giant",
    environments: ["All", "Mountains", "Plains", "Caves", "Ruines"],
  },
  {
    name: "Stone Golem",
    environments: ["All", "Mountains", "Plains", "Caves", "Cities", "Ruines"],
  },
  {
    name: "Storm Giant",
    environments: ["All", "Mountains", "Plains", "Caves", "Cities", "Ruines"],
  },
  {
    name: "Succubus/Incubus",
    environments: ["All", "Hell", "Ruines", "Swamps", "Caves", "Ruines"],
  },
  {
    name: "Swarm of Bats",
    environments: ["All", "Caves", "Forests", "Swamps", "Ruines"],
  },
  {
    name: "Swarm of Beetles",
    environments: ["All", "Caves", "Deserts", "Ruines", "Forests"],
  },
  {
    name: "Swarm of Centipedes",
    environments: ["All", "Caves", "Deserts", "Ruines", "Forests"],
  },
  {
    name: "Swarm of Insects",
    environments: ["All", "Caves", "Deserts", "Ruines"],
  },
  {
    name: "Swarm of Poisonous Snakes",
    environments: ["All", "Ruines", "Deserts", "Caves", "Swamps"],
  },
  {
    name: "Swarm of Quippers",
    environments: ["All", "Lakes", "Oceans", "Rivers"],
  },
  { name: "Swarm of Rats", environments: ["All", "Cities", "Caves", "Swamps"] },
  {
    name: "Swarm of Ravens",
    environments: ["All", "Forests", "Cities", "Plains"],
  },
  {
    name: "Swarm of Spiders",
    environments: ["All", "Deserts", "Ruines", "Caves"],
  },
  { name: "Swarm of Wasps", environments: ["All", "Deserts", "Forests"] },
  { name: "Tarrasque", environments: ["All", "Hell"] },
  { name: "Thug", environments: ["All", "Cities"] },
  { name: "Tiger", environments: ["All", "Forests", "Deserts"] },
  { name: "Treant", environments: ["All", "Forests"] },
  {
    name: "Tribal Warrior",
    environments: ["All", "Forests", "Deserts", "Plains"],
  },
  { name: "Triceratops", environments: ["All", "Forests"] },
  { name: "Troll", environments: ["All", "Forests", "Caves", "Ruines"] },
  { name: "Tyrannosaurus Rex", environments: ["All", "Forests"] },
  { name: "Unicorn", environments: ["All", "Mountains", "Plains", "Forests"] },
  {
    name: "Vampire, Bat Form",
    environments: ["All", "Cities", "Forests", "Caves", "Swamps"],
  },
  {
    name: "Vampire, Mist Form",
    environments: ["All", "Cities", "Forests", "Caves", "Swamps"],
  },
  {
    name: "Vampire Spawn",
    environments: ["All", "Cities", "Forests", "Caves", "Swamps"],
  },
  {
    name: "Vampire, Vampire Form",
    environments: ["All", "Cities", "Forests", "Caves", "Swamps"],
  },
  { name: "Veteran", environments: ["All", "Cities"] },
  {
    name: "Violet Fungus",
    environments: ["All", "Caves", "Forests", "Swamps"],
  },
  { name: "Vrock", environments: ["All", "Hell"] },
  { name: "Vulture", environments: ["All", "Deserts"] },
  { name: "Warhorse", environments: ["All", "Cities", "Plains"] },
  { name: "Warhorse Skeleton", environments: ["All", "Plains", "Caves"] },
  {
    name: "Water Elemental",
    environments: ["All", "Rivers", "Oceans", "Lakes"],
  },
  { name: "Weasel", environments: ["All", "Planins", "Forests"] },
  {
    name: "Werebear, Bear Form",
    environments: ["All", "Caves", "Forests", "Swamps"],
  },
  {
    name: "Werebear, Human Form",
    environments: ["All", "Cities", "Forests", "Caves", "Swamps"],
  },
  {
    name: "Werebear, Hybrid Form",
    environments: ["All", "Caves", "Forests", "Swamps"],
  },
  { name: "Wereboar, Boar Form", environments: ["All", "Forests"] },
  { name: "Wereboar, Human Form", environments: ["All", "Forests", "Cities"] },
  { name: "Wereboar, Hybrid Form", environments: ["All", "Forests"] },
  {
    name: "Wererat, Human Form",
    environments: ["All", "Cities", "Forests", "Swamps", "Ruines"],
  },
  {
    name: "Wererat, Hybrid Form",
    environments: ["All", "Cities", "Forests", "Swamps", "Ruines"],
  },
  {
    name: "Wererat, Rat Form",
    environments: ["All", "Cities", "Forests", "Swamps", "Ruines"],
  },
  {
    name: "Weretiger, Human Form",
    environments: ["All", "Cities", "Forests", "Deserts"],
  },
  {
    name: "Weretiger, Hybrid Form",
    environments: ["All", "Forests", "Deserts"],
  },
  {
    name: "Weretiger, Tiger Form",
    environments: ["All", "Forests", "Deserts"],
  },
  {
    name: "Werewolf, Human Form",
    environments: ["All", "Forests", "Swamps", "Cities"],
  },
  {
    name: "Werewolf, Hybrid Form",
    environments: ["All", "Forests", "Swamps"],
  },
  {
    name: "Werewolf, Wolf Form",
    environments: ["All", "Forests", "Swamps", "Caves"],
  },
  {
    name: "White Dragon Wyrmling",
    environments: ["All", "Mountains", "Caves", "Snow"],
  },
  {
    name: "Wight",
    environments: ["All", "Caves", "Ruines", "Forests", "Swamps"],
  },
  { name: "Will-o'-Wisp", environments: ["All", "Caves", "Ruines", "Swamps"] },
  { name: "Winter Wolf", environments: ["All", "Mountains", "Snow"] },
  { name: "Wolf", environments: ["All", "Mountains", "Forests"] },
  { name: "Worg", environments: ["All", "Mountains", "Forests", "Swamps"] },
  { name: "Wraith", environments: ["All", "Swamps", "Forests", "Caves"] },
  { name: "Wyvern", environments: ["All", "Plains", "Mountains"] },
  { name: "Xorn", environments: ["All", "Hell"] },
  {
    name: "Young Black Dragon",
    environments: ["All", "Swamps", "Forests", "Caves"],
  },
  {
    name: "Young Blue Dragon",
    environments: ["All", "Caves", "Deserts", "Caves"],
  },
  {
    name: "Young Brass Dragon",
    environments: ["All", "Ruines", "Caves", "Deserts"],
  },
  { name: "Young Bronze Dragon", environments: ["All", "Oceans", "Caves"] },
  {
    name: "Young Copper Dragon",
    environments: ["All", "Mountains", "Deserts", " Plains"],
  },
  {
    name: "Young Gold Dragon",
    environments: ["All", "Lakes", "Rivers", "Ruines", "Caves"],
  },
  {
    name: "Young Green Dragon",
    environments: ["All", "Plains", "Forests", "Caves"],
  },
  {
    name: "Young Red Dragon",
    environments: ["All", "Plains", "Mountains", "Cave"],
  },
  { name: "Young Silver Dragon", environments: ["All", "Mountains", "Caves"] },
  {
    name: "Young White Dragon",
    environments: ["All", "Mountains", "Caves", "Snow"],
  },
  {
    name: "Zombie",
    environments: ["All", "Cities", "Forests", "Swamps", "Caves", "Ruines"],
  },
] as IMonsterEnvironments[];
