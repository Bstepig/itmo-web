import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShootingComponent } from './shooting.component';

const routes: Routes = [{
  path: '',
  component: ShootingComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShootingRoutingModule { }
