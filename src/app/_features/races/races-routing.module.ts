import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RacesComponent } from './races.component';
import { RacesListComponent } from './races-list/races-list.component';

const routes: Routes = [
  { path: '', component: RacesComponent },
  { path: 'list', component: RacesListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RacesRoutingModule { }
