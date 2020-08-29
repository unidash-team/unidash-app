import { Injectable } from '@angular/core';

import { createEffect, Actions, ofType } from "@ngrx/effects";
import { switchMap, map, catchError, tap } from "rxjs/operators";

import { LoginPageActions, AuthApiActions } from '../actions';
import { AuthService } from 'src/app/core/services/auth.service';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class LoginEffects {

  login$ = createEffect(() =>
    this.actions$.pipe(ofType(LoginPageActions.login),
      switchMap(({ login }) =>
        this.authService.login(login).pipe(
          map(response => AuthApiActions.loginSuccess({ response })),
          catchError(error => of(AuthApiActions.loginFailure({ error })))
        ))
    ));
  
  loginSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthApiActions.loginSuccess),
      tap(result => {
        this.authService.setToken(result.response.accessToken);
        this.router.navigate(['/']);
      })
    ), { dispatch: false }
  );

  constructor(private actions$: Actions,
    private authService: AuthService,
    private router: Router) { }
}