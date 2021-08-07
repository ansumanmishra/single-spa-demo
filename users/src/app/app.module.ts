import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { Route, RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { FlexLayoutModule } from '@angular/flex-layout';

const routes: Route[] = [
  {
    path: 'users/detail/:userId',
    component: UserDetailComponent,
  },
  {
    path: '**',
    component: EmptyRouteComponent,
  },
];

@NgModule({
  declarations: [AppComponent, UsersComponent, UserDetailComponent],
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
