import {Component, OnInit} from '@angular/core';
import {singleSpaPropsSubject} from "../single-spa/single-spa-props";

@Component({
  selector: 'accounts-parcel',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'accounts';
  public props$ = singleSpaPropsSubject;
  accountsProp!: string | undefined;

  ngOnInit() {
    this.props$.subscribe(res => this.accountsProp = res?.accountsProp);
  }
}
