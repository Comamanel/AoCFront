import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityRoutingModule } from './security-routing.module';
import { SecurityComponent } from './security.component';
import { LoginComponent } from './_components/login/login.component';
import { NbCardModule, NbInputModule, NbButtonModule } from '@nebular/theme';
import { RegisterComponent } from './_components/register/register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LogoutComponent } from './_components/logout/logout.component';


@NgModule({
  declarations: [SecurityComponent, LoginComponent, RegisterComponent, LogoutComponent],
  imports: [
    CommonModule,
    SecurityRoutingModule,
    NbCardModule,
    FormsModule,
    ReactiveFormsModule,
    NbInputModule,
    NbButtonModule
  ]
})
export class SecurityModule { }
