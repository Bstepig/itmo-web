import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonFieldComponent } from './button-field.component';

@NgModule({
  declarations: [ButtonFieldComponent],
  exports: [ButtonFieldComponent],
  imports: [CommonModule, FormsModule],
})
export class ButtonFieldModule {}
