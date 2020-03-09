export interface RaceListModel {
  name: string;
  length: number;
  nbLaps: number;
  sections: Section[];
}

interface Section {
  surface: Surface;
  difficulty: number;
  length: number;
  slope: number;
}

interface Surface {
  label: string;
}