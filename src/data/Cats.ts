import type { Animal } from '../types/Animal';
import { ESpecies, EColorTheme } from '../types/Animal';

export const cats: Animal[] = [
  {
    name: 'Misu',
    toAdopt: true,
    description: 'Una gatita muy juguetona y tierna.',
    image: '/assets/cats/catDefault.jpg',
    color: EColorTheme.Pink,
    age: 2,
    birthday: '2022-05-12',
    since: '2022-09-01',
    species: ESpecies.Cat,
  },
  {
    name: 'Tigre',
    toAdopt: false,
    description: 'Gato travieso con mucha energía.',
    image: '/assets/cats/catDefault.jpg',
    color: EColorTheme.Orange,
    age: 3,
    birthday: '2021-03-08',
    since: '2021-07-20',
    species: ESpecies.Cat,
  },
];
