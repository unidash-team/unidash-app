import { Injectable } from '@angular/core';
import { Observable, EMPTY, of, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  register() {
    // TODO
  }

  login(credentials: {emailAddress: string, password: string}): Observable<{accessToken: string}> {
    return of({ accessToken: 'test' });
  }

  signOut() {
    // TODO
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    localStorage.getItem('token');
  }
}
