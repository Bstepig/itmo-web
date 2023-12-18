import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZzzrenameFieldComponent } from './zzzrename-field.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ZzzrenameFieldComponent
  ],
  exports: [
    ZzzrenameFieldComponent
  ],
  imports: [
    CommonModule, FormsModule
  ]
})
export class ZzzrenameFieldModule { }
