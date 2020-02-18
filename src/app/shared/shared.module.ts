import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgeFormatterPipe } from './_pipes/age-formatter.pipe';



@NgModule({
  declarations: [AgeFormatterPipe],
  imports: [
    CommonModule
  ],
  exports: [
    AgeFormatterPipe
  ]
}) 
export class SharedModule { }
