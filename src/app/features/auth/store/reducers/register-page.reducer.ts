import { NullTemplateVisitor } from '@angular/compiler';
import { createReducer, on, State } from '@ngrx/store';

import { RegisterPageActions, AuthApiActions } from '../actions';

export interface RegisterPageState {
  error: any | null;
  loading: boolean;
}

export const initialState: RegisterPageState = {
  error: null,
  loading: false
}

export const reducer = createReducer(initialState,
  on(RegisterPageActions.register, state => ({
    ...state, error: null, loading: true
  })),

  on(AuthApiActions.registerSuccess, state => ({
    ...state, error: null, loading: false
  })),

  on(AuthApiActions.registerFailure, (state, { error }) => ({
    ...state, error: error, loading: false
  }))
)