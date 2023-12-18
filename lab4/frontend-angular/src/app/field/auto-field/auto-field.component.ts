import { ChangeDetectorRef, Component, Injector, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';
import { Field } from '../model';

@Component({
  selector: 'wb-auto-field',
  templateUrl: './auto-field.component.html',
  styleUrls: ['./auto-field.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AutoFieldComponent),
      multi: true,
    }
  ]
})
export class AutoFieldComponent implements ControlValueAccessor {

  private _value: number | null = null;
  public get value(): number | null {
    return this._value;
  }
  public set value(value: number | null) {
    this._value = value;
    this.onChange(value);
  }
  isDisabled: boolean = false;
  @Input() field!: Field | any;
  @Input() name!: string;

  constructor(private _injector: Injector, private _cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    const ngControl = this._injector.get(NgControl);
    this.name = (ngControl.name || '')?.toString();
    this._cdr.markForCheck();
  }

  onChange!: (value: number | null) => void;
  onTouched!: () => void;

  writeValue(obj: number): void {
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
