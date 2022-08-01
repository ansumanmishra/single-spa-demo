import { enableProdMode, NgZone } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { singleSpaAngular } from 'single-spa-angular';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import {
  keywordEntered$,
  singleSpaPropsSubject,
} from './single-spa/single-spa-props';
import { keyword$ } from '@demo/utility';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

if (environment.production) {
  enableProdMode();
}

const lifecycles = singleSpaAngular({
  bootstrapFunction: (singleSpaProps) => {
    singleSpaPropsSubject.next(singleSpaProps);
    return platformBrowserDynamic().bootstrapModule(AppModule);
  },
  template: '<nav-root />',
  NgZone,
});

const unsubscribe$ = new Subject();
keywordEntered$
  .pipe(takeUntil(unsubscribe$), debounceTime(200))
  .subscribe((keyword) => keyword$.next(keyword));

export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = [
  lifecycles.unmount,
  async () => {
    unsubscribe$.next();
    unsubscribe$.complete();
  },
];
