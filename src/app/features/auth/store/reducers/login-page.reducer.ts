import { NullTemplateVisitor } from '@angular/compiler';
import { createReducer, on, State } from '@ngrx/store';

import { LoginPageActions, AuthApiActions } from '../actions';

export interface LoginPageState {
  error: any | null;
  loading: boolean;
}

export const initialState: LoginPageState = {
  error: null,
  loading: false
}

export const reducer = createReducer(initialState,
  on(LoginPageActions.login, state => ({
    ...state, error: null, loading: true
  })),

  on(AuthApiActions.loginSuccess, state => ({
    ...state, error: null, loading: false
  })),

  on(AuthApiActions.loginFailure, (state, { error }) => ({
    ...state, error: error, loading: false
  }))
)

