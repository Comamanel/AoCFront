import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './_core/home/home.component';
import { IsConnectedGuard } from './_core/_guards/is-connected.guard';
import { IsAdminGuard } from './_core/_guards/is-admin.guard';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'races', loadChildren: () => import('./_features/races/races.module').then(m => m.RacesModule) },
  { path: 'cyclist', loadChildren: () => import('./_features/cyclist/cyclist.module').then(m => m.CyclistModule), canActivate: [IsConnectedGuard] },
  { path: 'security', loadChildren: () => import('./_features/security/security.module').then(m => m.SecurityModule) },
  { path: 'history', loadChildren: () => import('./_features/history/history.module').then(m => m.HistoryModule) },
  { path: 'management', loadChildren: () => import('./_features/management/management.module').then(m => m.ManagementModule), canActivate: [IsConnectedGuard] },
  { path: 'admin', loadChildren: () => import('./_features/admin/admin.module').then(m => m.AdminModule), canActivate: [IsAdminGuard, IsConnectedGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
