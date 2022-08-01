import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { Route, RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { FlexLayoutModule } from '@angular/flex-layout';

const routes: Route[] = [
  {
    path: 'users/account',
    loadChildren: () => import('./accounts-parcel/accounts-parcel.module').then( m => m.AccountsParcelModule)
  },
  {
    path: 'users/dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardModule)
  },
  {
    path: 'users/detail/:userId',
    loadChildren: () =>
      import('./user-detail/user-details.module').then(
        (m) => m.UserDetailsModule
      ),
  },
  {
    path: '**',
    component: EmptyRouteComponent,
  },
];

@NgModule({
  declarations: [AppComponent, UsersComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FlexLayoutModule,
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: '/',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
