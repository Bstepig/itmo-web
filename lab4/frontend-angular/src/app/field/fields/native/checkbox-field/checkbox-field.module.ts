import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxFieldComponent } from './checkbox-field.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CheckboxFieldComponent
  ],
  exports: [
    CheckboxFieldComponent
  ],
  imports: [
    CommonModule, FormsModule
  ]
})
export class CheckboxFieldModule { }
