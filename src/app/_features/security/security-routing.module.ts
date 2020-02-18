import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecurityComponent } from './security.component';
import { LoginComponent } from './_components/login/login.component';
import { RegisterComponent } from './_components/register/register.component';
import { LogoutComponent } from './_components/logout/logout.component';
import { IsNotConnectedGuard } from 'src/app/shared/_guards/is-not-connected.guard';
import { IsConnectedGuard } from 'src/app/shared/_guards/is-connected.guard';

const routes: Routes = [
  { path: '', component: SecurityComponent },
  { path: 'login', component: LoginComponent, canActivate:[IsNotConnectedGuard] }, 
  { path: 'register', component: RegisterComponent, canActivate: [IsNotConnectedGuard] },
  { path: 'logout', component: LogoutComponent, canActivate: [IsConnectedGuard]  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }
