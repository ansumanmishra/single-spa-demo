import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BmiWidgetComponent } from './bmi-widget.component';



@NgModule({
  declarations: [
    BmiWidgetComponent
  ],
  exports: [
    BmiWidgetComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BmiWidgetModule { }
