export interface CyclistListModel {
  id: number;
  firstName: string;
  lastName: string;
  country: string;
  weight: number;
  height: number;
  age: Age;
  skillSetList: SkillSetList[];
}

export interface SkillSetList {
  skill: Skill;
  value: number;
}

interface Skill {
  label: string;
}

export interface Age {
  years: number;
  month: number;
  days: number;
}