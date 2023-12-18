import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShootingRoutingModule } from './shooting-routing.module';
import { ShootingComponent } from './shooting.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AutoFieldModule } from 'src/app/field/auto-field/auto-field.module';


@NgModule({
  declarations: [
    ShootingComponent
  ],
  imports: [
    CommonModule,
    ShootingRoutingModule,
    ReactiveFormsModule,
    AutoFieldModule
  ]
})
export class ShootingModule { }
