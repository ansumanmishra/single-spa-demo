import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, takeUntil } from 'rxjs/operators';
import { UsersService } from '../users/users.service';
import { combineLatest, Observable, Subject } from 'rxjs';
import { User } from '../users/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnDestroy {
  usersFiltered$: Observable<User[]>;
  unsubscribe$: Subject<void> = new Subject<void>();

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly usersService: UsersService
  ) {
    this.usersFiltered$ = combineLatest([
      this.activatedRoute.params,
      this.usersService.users$,
    ]).pipe(
      takeUntil(this.unsubscribe$),
      map(([param, users]) => users.filter((user) => user.id === +param.userId))
    );
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
