import type { Animal } from '../types/Animal';
import { ESpecies, EColorTheme } from '../types/Animal';

export const dogs: Animal[] = [
  {
    name: 'Luna',
    toAdopt: true,
    description: 'Perrita leal y tranquila.',
    image: '/assets/dogs/dogDefault.jpg',
    color: EColorTheme.Blue,
    age: 4,
    birthday: '2020-01-10',
    since: '2020-06-15',
    species: ESpecies.Dog,
  },
  {
    name: 'Rocky',
    toAdopt: false,
    description: 'Perrito valiente y protector.',
    image: '/assets/dogs/dogDefault.jpg',
    color: EColorTheme.Green,
    age: 5,
    birthday: '2019-08-25',
    since: '2020-02-01',
    species: ESpecies.Dog,
  },
];
