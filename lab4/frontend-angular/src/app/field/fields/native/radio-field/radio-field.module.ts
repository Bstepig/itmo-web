import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioFieldComponent } from './radio-field.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RadioFieldComponent
  ],
  exports: [
    RadioFieldComponent
  ],
  imports: [
    CommonModule, FormsModule
  ]
})
export class RadioFieldModule { }
