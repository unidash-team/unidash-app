import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';

import * as fromAuth from '../../store/reducers';
import { Observable } from 'rxjs';
import { Login } from '../../models';
import { LoginPageActions } from '../../store/actions';

@Component({
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  error$: Observable<any>;

  form = new FormGroup({
    emailAddress: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private store: Store<fromAuth.AuthState>) { }

  ngOnInit() {
    this.error$ = this.store.select(fromAuth.selectLoginPageError);
  }
  
  handleForm(login: Login) {
    console.log(login);
    this.store.dispatch(LoginPageActions.login({ login }));
  }

}
