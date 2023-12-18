import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectFieldComponent } from './select-field.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SelectFieldComponent
  ],
  exports: [
    SelectFieldComponent
  ],
  imports: [
    CommonModule, FormsModule
  ]
})
export class SelectFieldModule { }
