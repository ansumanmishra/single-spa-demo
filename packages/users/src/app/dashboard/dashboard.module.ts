import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {RouterModule} from "@angular/router";
import {CalcWidgetModule} from "@demo/widgets-lib/calc-widget";
// import {BmiWidgetModule} from "@demo/widgets-lib/bmi-widget";

const routes = [{
  path: '',
  component: DashboardComponent
}]

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    // BmiWidgetModule,
    CalcWidgetModule,
  ],
})
export class DashboardModule { }
