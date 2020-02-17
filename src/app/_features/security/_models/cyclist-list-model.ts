interface CyclistListModel {
  firstName: string;
  lastName: string;
  country: string;
  weight: number;
  height: number;
  age: Age;
  skillSetList: SkillSetList[];
}

interface SkillSetList {
  skill: Skill;
  value: number;
}

interface Skill {
  label: string;
}

interface Age {
  years: number;
  month: number;
  days: number;
}