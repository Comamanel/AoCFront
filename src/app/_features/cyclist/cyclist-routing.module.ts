import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CyclistComponent } from './cyclist.component';
import { CyclistDetailsComponent } from './cyclist-details/cyclist-details.component';
import { IsConnectedGuard } from 'src/app/shared/_guards/is-connected.guard';
import {RegistrationsComponent} from './registrations/registrations.component';

const routes: Routes = [
  { path: '', component: CyclistComponent },
  { path: 'details', component: CyclistDetailsComponent, canActivate: [IsConnectedGuard] },
  { path: 'registrations', component: RegistrationsComponent, canActivate: [IsConnectedGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CyclistRoutingModule { }
