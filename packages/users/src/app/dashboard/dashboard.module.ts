import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {RouterModule} from "@angular/router";
import {BmiWidgetModule} from "@demo/widgets-lib/bmi-widget";

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
    BmiWidgetModule
  ],
})
export class DashboardModule { }
