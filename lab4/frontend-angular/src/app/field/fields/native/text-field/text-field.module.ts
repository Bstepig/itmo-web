import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TextFieldComponent } from './text-field.component';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

@NgModule({
  declarations: [TextFieldComponent],
  exports: [TextFieldComponent],
  imports: [CommonModule, FormsModule, NgxMaskDirective],
  providers: [provideNgxMask()],
})
export class TextFieldModule {}
