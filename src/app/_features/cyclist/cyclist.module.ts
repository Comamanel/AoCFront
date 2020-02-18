import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CyclistRoutingModule } from './cyclist-routing.module';
import { CyclistComponent } from './cyclist.component';
import { CyclistDetailsComponent } from './cyclist-details/cyclist-details.component';
import { NbCardModule, NbListModule, NbLayoutModule } from '@nebular/theme';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [CyclistComponent, CyclistDetailsComponent],
  imports: [
    CommonModule,
    CyclistRoutingModule, 
    NbCardModule, 
    SharedModule, 
    NbListModule, 
    NbLayoutModule
  ]
})
export class CyclistModule { }
