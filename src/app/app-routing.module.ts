import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'races', loadChildren: () => import('./_features/races/races.module').then(m => m.RacesModule) }, 
  { path: 'cyclist', loadChildren: () => import('./_features/cyclist/cyclist.module').then(m => m.CyclistModule) }, 
  { path: 'security', loadChildren: () => import('./_features/security/security.module').then(m => m.SecurityModule) }, 
  { path: 'history', loadChildren: () => import('./_features/history/history.module').then(m => m.HistoryModule) }, 
  { path: 'management', loadChildren: () => import('./_features/management/management.module').then(m => m.ManagementModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
