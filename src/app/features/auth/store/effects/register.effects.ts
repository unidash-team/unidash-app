import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { Router } from '@angular/router';

import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { RegisterPageActions, AuthApiActions } from '../actions';
import { AuthService } from 'src/app/core/services/auth.service';

@Injectable()
export class RegisterEffects {

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RegisterPageActions.register),
      switchMap(({ register }) =>
        this.authService.register(register).pipe(
          map(response => AuthApiActions.registerSuccess({ response }),
          catchError(error => of(AuthApiActions.registerFailure({ error }))
        )))
      )));

  registerSuccess$ = createEffect(() =>
    this.actions$.pipe(ofType(AuthApiActions.registerSuccess),
      tap(result => {
        this.authService.setToken(result.response.accessToken);
        this.router.navigate(['/']);
      })
    ));


  constructor(private actions$: Actions,
    private authService: AuthService,
    private router: Router) { }

}