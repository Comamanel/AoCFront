import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CyclistComponent } from './cyclist.component';
import { CyclistDetailsComponent } from './cyclist-details/cyclist-details.component';
import { AddCyclistComponent } from './add-cyclist/add-cyclist.component';
import { IsConnectedGuard } from 'src/app/_core/_guards/is-connected.guard';

const routes: Routes = [
  { path: '', component: CyclistComponent },
  { path: 'details', component: CyclistDetailsComponent, canActivate: [IsConnectedGuard] },
  { path: 'add-cyclist', component: AddCyclistComponent, canActivate: [IsConnectedGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CyclistRoutingModule { }
