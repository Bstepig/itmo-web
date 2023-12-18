import {
  ChangeDetectorRef,
  Component,
  Injector,
  Input,
  forwardRef,
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NgControl,
} from '@angular/forms';

@Component({
  selector: 'wb-radio-field',
  templateUrl: './radio-field.component.html',
  styleUrls: ['./radio-field.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioFieldComponent),
      multi: true,
    },
  ],
})
export class RadioFieldComponent implements ControlValueAccessor {
  private _value: number | null = null;
  public get value(): number | null {
    return this._value;
  }
  public set value(value: number | null) {
    this._value = value;
    this.onChange(value);
  }
  isDisabled: boolean = false;
  @Input() min?: number;
  @Input() max?: number;
  @Input()
  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
    this._cdr.markForCheck();
  }
  private _name!: string;

  @Input() options: number[] = [];
  @Input()
  public get default(): number | null {
    return this._default;
  }
  public set default(value: number | null) {
    this._default = value;
    if (this.value === null && value !== null) {
      this._value = value;
    }
  }
  private _default: number | null = null;

  constructor(private _cdr: ChangeDetectorRef) {}

  onChange!: (value: number | null) => void;
  onTouched!: () => void;

  writeValue(obj: number): void {
    if (obj === null || obj === undefined) return;
    this._value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
}
