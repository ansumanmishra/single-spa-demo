import { Component } from '@angular/core';
import { keywordEntered$ } from 'src/single-spa/single-spa-props';

@Component({
  selector: 'nav-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  keywordEntered$ = keywordEntered$;
  title = 'navigation';
}
