import { Injectable } from '@angular/core';
import { Observable, EMPTY, of, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  register(credentials: {firstName: string, lastName:string, dateOfBirth: Date, emailAddress: string, password: string}): Observable<{accessToken: string}>{
    return of({accessToken: 'test'});
  };    

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
