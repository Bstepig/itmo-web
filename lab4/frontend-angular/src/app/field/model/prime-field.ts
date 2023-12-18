interface SelectField {
  type: 'prime-select',
  options: number[];
  default: number;
  min?: number;
  max?: number;
}

interface ChecboxField {
  type: 'prime-checkbox',
  options: number[];
  default: number;
  min?: number;
  max?: number;
}

interface RadioField {
  type: 'prime-radio',
  options: number[];
  default: number;
  min?: number;
  max?: number;
}

interface ButtonField {
  type: 'prime-button',
  options: number[];
  default: number;
  min?: number;
  max?: number;
}

interface TextField {
  type: 'prime-text',
  default: number;
  min?: number;
  max?: number;
}

interface SliderField {
  type: 'prime-slider',
  default: number;
  min?: number;
  max?: number;
}

export type PrimeField = SelectField | ChecboxField | RadioField | ButtonField | TextField | SliderField;
