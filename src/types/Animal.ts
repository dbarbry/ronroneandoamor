export enum ESpecies {
    Cat = 'cat',
    Dog = 'dog'
}

export enum EColorTheme {
    Pink = '#ffc0cb',
    Orange = '#ffa500',
    Blue = '#add8e6',
    Green = '#98fb98',
    Yellow = '#ffff99',
}

export interface Animal {
  name: string;
  toAdopt: boolean;
  description: string;
  image: string; // path to image in assets
  color: EColorTheme;
  age: number;
  birthday: string; // ISO format e.g. '2021-05-12'
  since: string; // ISO format e.g. '2023-03-15'
  species: ESpecies;
}
