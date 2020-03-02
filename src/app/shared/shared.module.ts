import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgeFormatterPipe } from './_pipes/age-formatter.pipe';
import { CaracteristicColorPipe } from './_pipes/caracteristic-color.pipe';
import { InputColorPipe } from './_pipes/input-color.pipe';
import { DisplayLeftPointsCaracteristicsPipe } from './_pipes/display-left-points-caracteristics.pipe';



@NgModule({
  declarations: [AgeFormatterPipe, CaracteristicColorPipe, InputColorPipe, DisplayLeftPointsCaracteristicsPipe],
  imports: [
    CommonModule
  ],
  exports: [
    AgeFormatterPipe,
    CaracteristicColorPipe,
    InputColorPipe,
    DisplayLeftPointsCaracteristicsPipe
  ]
}) 
export class SharedModule { }
