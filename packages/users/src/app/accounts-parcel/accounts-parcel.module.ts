import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AccountDetailsComponent} from "./account-details/account-details.component";
import {RouterModule} from "@angular/router";
import {ParcelModule} from "single-spa-angular/parcel";

const routes = [{
  path: '',
  component: AccountDetailsComponent
}]

@NgModule({
  declarations: [AccountDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ParcelModule
  ]
})
export class AccountsParcelModule { }
