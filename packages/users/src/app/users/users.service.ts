import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { assetUrl } from '../../single-spa/asset-url';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users$ = this.httpClient.get<User[]>(assetUrl('users.json'));

  constructor(private readonly httpClient: HttpClient) {}
}
