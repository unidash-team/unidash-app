import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { RegisterPageActions, AuthApiActions } from '../actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';

@Injectable()
export class RegisterEffects{

    register$ = createEffect(() =>
        this.actions$.pipe(ofType(RegisterPageActions.register),
        switchMap(({register}) =>
            this.authService.register(register).pipe(
                map(response => AuthApiActions.registerSuccess({response}),
                catchError(error => of(AuthApiActions.registerFailure({error}))
            )))
        ))
    );
        

    constructor(private actions$: Actions,
        private authService: AuthService,
        private router: Router) {}

}