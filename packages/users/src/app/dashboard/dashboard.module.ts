import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {BmiWidgetModule} from "bmi-widget";
import {RouterModule} from "@angular/router";

const routes = [{
  path: '',
  component: DashboardComponent
}]

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    BmiWidgetModule,
    RouterModule.forChild(routes),
  ]
})
export class DashboardModule { }
