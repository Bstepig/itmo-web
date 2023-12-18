import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SliderFieldComponent } from './slider-field.component';

@NgModule({
  declarations: [SliderFieldComponent],
  exports: [SliderFieldComponent],
  imports: [CommonModule, FormsModule],
})
export class SliderFieldModule {}
