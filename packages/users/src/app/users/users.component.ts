import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { combineLatest, Observable } from 'rxjs';
import { User } from './user';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [
    `
      .styled-table {
        border-collapse: collapse;
        margin: 25px 0;
        font-size: 0.9em;
        font-family: sans-serif;
        min-width: 400px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
      }
      .styled-table th,
      .styled-table td {
        padding: 10px 10px;
      }
    `,
  ],
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
