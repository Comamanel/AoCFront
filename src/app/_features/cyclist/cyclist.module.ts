import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CyclistRoutingModule } from './cyclist-routing.module';
import { CyclistComponent } from './cyclist.component';


@NgModule({
  declarations: [CyclistComponent],
  imports: [
    CommonModule,
    CyclistRoutingModule
  ]
})
export class CyclistModule { }
