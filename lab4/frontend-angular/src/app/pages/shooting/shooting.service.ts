import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { config } from 'src/app/config';

export interface NewShot {
  coordinateX: number;
  coordinateY: number;
  radius: number;
}

@Injectable({
  providedIn: 'root',
})
export class ShootingService {
  formGroup = new FormGroup({
    coordinateX: new FormControl(config.coordinateX.default, [Validators.required]),
    coordinateY: new FormControl(config.coordinateY.default, [Validators.required]),
    radius: new FormControl(config.radius.default, [Validators.required]),
  });

  constructor() {
    this._applyValidators();
  }

  shoot(shot: NewShot) {
    // TODO
  }

  private _applyValidators() {
    if (config.coordinateX.min !== undefined) {
      this.formGroup.controls.coordinateX.addValidators(
        Validators.min(config.coordinateX.min)
      );
    }
    if (config.coordinateX.max !== undefined) {
      this.formGroup.controls.coordinateX.addValidators(
        Validators.max(config.coordinateX.max)
      );
    }
    if (config.coordinateY.min !== undefined) {
      this.formGroup.controls.coordinateY.addValidators(
        Validators.min(config.coordinateY.min)
      );
    }
    if (config.coordinateY.max !== undefined) {
      this.formGroup.controls.coordinateY.addValidators(
        Validators.max(config.coordinateY.max)
      );
    }
    if (config.radius.min !== undefined) {
      this.formGroup.controls.radius.addValidators(
        Validators.min(config.radius.min)
      );
    }
    if (config.radius.max !== undefined) {
      this.formGroup.controls.radius.addValidators(
        Validators.max(config.radius.max)
      );
    }
  }
}
