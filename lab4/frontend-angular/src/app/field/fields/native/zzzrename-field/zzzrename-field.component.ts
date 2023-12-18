import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'wb-button-field',
  templateUrl: './zzzrename-field.component.html',
  styleUrls: ['./zzzrename-field.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ZzzrenameFieldComponent),
      multi: true
    }
  ]
})
export class ZzzrenameFieldComponent implements ControlValueAccessor {

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
