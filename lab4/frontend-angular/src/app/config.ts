import { Field } from './field/model';

export interface IConfig {
  coordinateX: Field;
  coordinateY: Field;
  radius: Field;
}

export const config: IConfig = {
  coordinateX: {
    type: 'button',
    options: [0, 1, 2],
    default: 0,
  },
  coordinateY: {
    type: 'text',
    default: 0,
  },
  radius: {
    type: 'checkbox',
    options: [0, 1, 2],
    default: 20,
  },
};
