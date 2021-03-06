import { ChangeDetectorRef, Component, OnInit, VERSION } from '@angular/core';
import { singleSpaPropsSubject } from '../single-spa/single-spa-props';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'users';
  keyword$: BehaviorSubject<string | undefined> = new BehaviorSubject<
    string | undefined
  >(undefined);
  someText: string;
  angularVersion = VERSION;

  constructor(private readonly cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    singleSpaPropsSubject.subscribe((props: any) => {
      this.keyword$.next(props.keyword);
      this.someText = props.someText;

      this.cd.detectChanges();
    });
  }
}
