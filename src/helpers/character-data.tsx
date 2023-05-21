interface AbilityScore {
  id: number;
  name: string;
  score: number;
}

interface Skill {
  code: string;
  name: string;
  ability: string;
  proficient: boolean;
}

interface SavingThrow {
  ability: string;
  proficient: boolean;
}

const abilityScores: AbilityScore[] = [
  { id: 1, name: "strength", score: 18 },
  { id: 2, name: "constitution", score: 16 },
  { id: 3, name: "dexterity", score: 10 },
  { id: 4, name: "intelligence", score: 4 },
  { id: 5, name: "wisdom", score: 12 },
  { id: 6, name: "charisma", score: 18 },
];

const skills: Skill[] = [
  {
    code: "acrobatics",
    name: "Acrobatics",
    ability: "dexterity",
    proficient: false,
  },
  {
    code: "animalHandling",
    name: "Animal Handling",
    ability: "wisdom",
    proficient: true,
  },
  {
    code: "arcana",
    name: "Arcana",
    ability: "intelligence",
    proficient: false,
  },
  {
    code: "athletics",
    name: "Athletics",
    ability: "strength",
    proficient: true,
  },
  {
    code: "deception",
    name: "Deception",
    ability: "charisma",
    proficient: false,
  },
  {
    code: "history",
    name: "History",
    ability: "intelligence",
    proficient: false,
  },
  { code: "insight", name: "Insight", ability: "wisdom", proficient: false },
  {
    code: "intimidation",
    name: "Intimidation",
    ability: "charisma",
    proficient: false,
  },
  {
    code: "investigation",
    name: "Investigation",
    ability: "intelligence",
    proficient: false,
  },
  {
    code: "medicine",
    name: "Medicine",
    ability: "intelligence",
    proficient: false,
  },
  { code: "nature", name: "Nature", ability: "wisdom", proficient: false },
  {
    code: "performance",
    name: "Performance",
    ability: "charisma",
    proficient: false,
  },
  {
    code: "persuasion",
    name: "Persuasio",
    ability: "charisma",
    proficient: true,
  },
  {
    code: "sleightOfHand",
    name: "Sleight of Hand",
    ability: "dexterity",
    proficient: false,
  },
  { code: "stealth", name: "Stealth", ability: "dexterity", proficient: false },
  { code: "survival", name: "Survival", ability: "wisdom", proficient: true },
];

const savingThrows: SavingThrow[] = [
  { ability: "strength", proficient: true },
  { ability: "constitution", proficient: false },
  { ability: "dexterity", proficient: true },
  { ability: "intelligence", proficient: false },
  { ability: "wisdom", proficient: true },
  { ability: "charisma", proficient: true },
];

export const character = {
  race: "half-elf",
  class: "paladin",
  levels: 15,
  abilityScores,
  skills,
  savingThrows,
  armorClass: 25,
  initiative: (abilityScores[2].score - 10) / 2,
  speed: 30,
};
