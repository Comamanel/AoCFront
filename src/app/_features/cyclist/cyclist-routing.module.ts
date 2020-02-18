import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CyclistComponent } from './cyclist.component';
import { CyclistDetailsComponent } from './cyclist-details/cyclist-details.component';
import { IsConnectedGuard } from 'src/app/shared/_guards/is-connected.guard';

const routes: Routes = [
  { path: '', component: CyclistComponent },
  { path: 'details', component: CyclistDetailsComponent, canActivate: [IsConnectedGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CyclistRoutingModule { }
