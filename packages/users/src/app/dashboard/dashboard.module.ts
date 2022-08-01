import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {RouterModule} from "@angular/router";
import {BmiWidgetModule, CalcWidgetModule} from "widgets-lib";

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
    BmiWidgetModule,
    CalcWidgetModule
  ],
})
export class DashboardModule { }
