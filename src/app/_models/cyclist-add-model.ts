import { SkillSetList, Age } from './cyclist-list-model';

export interface CyclistAddModel {
  id?: number;
  firstName: string;
  lastName: string;
  country: string;
  weight: number;
  height: number;
  age?: Age;
  skillSetList?: SkillSetList[];
  user?: string;
}