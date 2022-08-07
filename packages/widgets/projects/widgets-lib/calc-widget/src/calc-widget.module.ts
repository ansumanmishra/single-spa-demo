import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalcWidgetComponent } from './calc-widget.component';



@NgModule({
  declarations: [
    CalcWidgetComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [CalcWidgetComponent]
})
export class CalcWidgetModule { }
