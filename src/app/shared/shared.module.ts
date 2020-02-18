import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgeFormatterPipe } from './_pipes/age-formatter.pipe';
import { CaracteristicColorPipe } from './_pipes/caracteristic-color.pipe';



@NgModule({
  declarations: [AgeFormatterPipe, CaracteristicColorPipe],
  imports: [
    CommonModule
  ],
  exports: [
    AgeFormatterPipe,
    CaracteristicColorPipe
  ]
}) 
export class SharedModule { }
