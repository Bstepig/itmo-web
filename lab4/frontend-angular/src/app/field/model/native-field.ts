interface SelectField {
  type: 'select',
  options: number[];
  default: number;
  min?: number;
  max?: number;
}

interface ChecboxField {
  type: 'checkbox',
  options: number[];
  default: number;
  min?: number;
  max?: number;
}

interface RadioField {
  type: 'radio',
  options: number[];
  default: number;
  min?: number;
  max?: number;
}

interface ButtonField {
  type: 'button',
  options: number[];
  default: number;
  min?: number;
  max?: number;
}

interface TextField {
  type: 'text',
  default: number;
  min?: number;
  max?: number;
}

interface SliderField {
  type: 'slider',
  default: number;
  min?: number;
  max?: number;
}

export type NativeField = SelectField | ChecboxField | RadioField | ButtonField | TextField | SliderField;
