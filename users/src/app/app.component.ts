import { Component } from '@angular/core';
import { singleSpaPropsSubject } from '../single-spa/single-spa-props';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'users';
  singleSpaPropsSubject: Observable<any> = singleSpaPropsSubject;
}
