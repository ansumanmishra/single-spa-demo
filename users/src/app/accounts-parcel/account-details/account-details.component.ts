import { Component, OnInit } from '@angular/core';
import { mountRootParcel } from 'single-spa';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {
  mountRootParcel = mountRootParcel;

  constructor() { }

  ngOnInit(): void {
  }

  async config() {
    return (window as any).System.import('@demo/accounts');
  }

}
