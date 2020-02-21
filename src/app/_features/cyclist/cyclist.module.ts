import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CyclistRoutingModule } from './cyclist-routing.module';
import { CyclistComponent } from './cyclist.component';
import { CyclistDetailsComponent } from './cyclist-details/cyclist-details.component';
import {
  NbCardModule,
  NbListModule,
  NbLayoutModule,
  NbInputModule,
  NbDatepickerModule,
  NbSelectModule, NbButtonModule,
} from '@nebular/theme';
import { SharedModule } from 'src/app/shared/shared.module';
import { RegistrationsComponent } from './registrations/registrations.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [CyclistComponent, CyclistDetailsComponent, RegistrationsComponent],
  imports: [
    CommonModule,
    CyclistRoutingModule,
    NbCardModule,
    SharedModule,
    NbListModule,
    NbLayoutModule,
    ReactiveFormsModule,
    NbInputModule,
    NbDatepickerModule,
    NbSelectModule,
    NbButtonModule
  ]
})
export class CyclistModule { }
