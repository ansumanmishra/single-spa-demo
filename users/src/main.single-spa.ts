import { enableProdMode, NgZone } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { singleSpaAngular } from 'single-spa-angular';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { singleSpaPropsSubject } from './single-spa/single-spa-props';
import { keyword$ } from '@demo/utility';
import { startWith, takeUntil } from 'rxjs/operators';
import { keywordEntered$ } from '../../navigation/src/single-spa/single-spa-props';
import { Subject } from 'rxjs';

if (environment.production) {
  enableProdMode();
}

const unsubscribe$ = new Subject();

const lifecycles = singleSpaAngular({
  bootstrapFunction: (singleSpaProps) => {
    keyword$.pipe(takeUntil(unsubscribe$)).subscribe((keyword) => {
      const singleSpaPropsWithKeyword = Object.assign({}, singleSpaProps, {
        keyword,
      });
      singleSpaPropsSubject.next(singleSpaPropsWithKeyword);
    });
    return platformBrowserDynamic().bootstrapModule(AppModule);
  },
  template: '<app-root />',
  NgZone,
});

export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = [
  lifecycles.unmount,
  async () => {
    unsubscribe$.next();
    unsubscribe$.complete();
  },
];
