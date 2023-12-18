import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoFieldComponent } from './auto-field.component';
import { FormsModule } from '@angular/forms';
import { SelectFieldModule } from '../fields/native/select-field/select-field.module';
import { RadioFieldModule } from '../fields/native/radio-field/radio-field.module';
import { CheckboxFieldModule } from '../fields/native/checkbox-field/checkbox-field.module';
import { ButtonFieldModule } from '../fields/native/button-field/button-field.module';
import { TextFieldModule } from '../fields/native/text-field/text-field.module';
import { SliderFieldModule } from '../fields/native/slider-field/slider-field.module';

@NgModule({
  declarations: [AutoFieldComponent],
  exports: [AutoFieldComponent],
  imports: [
    CommonModule,
    FormsModule,

    // Native
    SelectFieldModule,
    RadioFieldModule,
    CheckboxFieldModule,
    ButtonFieldModule,
    TextFieldModule,
    SliderFieldModule,
  ],
})
export class AutoFieldModule {}
