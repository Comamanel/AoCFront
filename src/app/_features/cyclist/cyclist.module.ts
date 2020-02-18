import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CyclistRoutingModule } from './cyclist-routing.module';
import { CyclistComponent } from './cyclist.component';
import { CyclistDetailsComponent } from './cyclist-details/cyclist-details.component';


@NgModule({
  declarations: [CyclistComponent, CyclistDetailsComponent],
  imports: [
    CommonModule,
    CyclistRoutingModule
  ]
})
export class CyclistModule { }
