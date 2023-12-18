import { Component } from '@angular/core';
import { NewShot, ShootingService } from './shooting.service';
import { config } from 'src/app/config';

@Component({
  selector: 'wb-shooting',
  templateUrl: './shooting.component.html',
  styleUrls: ['./shooting.component.scss'],
})
export class ShootingComponent {
  get config() {
    return config;
  }

  get formGroup() {
    return this._shootingService.formGroup;
  }

  constructor(private _shootingService: ShootingService) {}

  submit() {
    if (this.formGroup.invalid) {
      alert('nope');
      return;
    }
    const value: NewShot = this.formGroup.value as any;
    this._shootingService.shoot(value);
  }
}
