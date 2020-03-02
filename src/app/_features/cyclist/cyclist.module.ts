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
import {ReactiveFormsModule} from "@angular/forms";
import { AddCyclistComponent } from './add-cyclist/add-cyclist.component';


@NgModule({
  declarations: [CyclistComponent, CyclistDetailsComponent, AddCyclistComponent],
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
