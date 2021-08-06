import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { combineLatest, Observable } from 'rxjs';
import { User } from './user';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [``],
})
export class UsersComponent implements OnInit {
  users$: Observable<User[]> = this.usersService.users$;
  usersWithKeyword$: Observable<User[]>;
  @Input('keyword') keyword$: Observable<string | undefined>;

  constructor(private readonly usersService: UsersService) {}

  ngOnInit() {
    this.usersWithKeyword$ = combineLatest([this.keyword$, this.users$]).pipe(
      map(([keyword, users]) => {
        if (!keyword) {
          return users;
        }
        return users.filter(
          (user) => user.city.toLowerCase().search(keyword.toLowerCase()) > -1
        );
      })
    );
  }
}
