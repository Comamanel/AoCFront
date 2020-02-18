import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgeFormatterPipe } from './_pipes/age-formatter.pipe';
import { CaracteristicColorPipe } from './_pipes/caracteristic-color.pipe';
import { InputColorPipe } from './_pipes/input-color.pipe';



@NgModule({
  declarations: [AgeFormatterPipe, CaracteristicColorPipe, InputColorPipe],
  imports: [
    CommonModule
  ],
  exports: [
    AgeFormatterPipe,
    CaracteristicColorPipe,
    InputColorPipe
  ]
}) 
export class SharedModule { }
