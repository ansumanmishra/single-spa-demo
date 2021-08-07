import { NgModule } from '@angular/core';
import { UserDetailComponent } from './user-detail.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes = [
  {
    path: '',
    component: UserDetailComponent,
  },
];

@NgModule({
  declarations: [UserDetailComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class UserDetailsModule {}
