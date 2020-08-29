import { Action, combineReducers, State } from '@ngrx/store';

import * as fromLoginPage from './login-page.reducer';
import * as fromRegisterPage from './login-page.reducer';

import { LoginPageState } from './login-page.reducer';
import { RegisterPageState } from './register-page.reducer';

export interface AuthState {
  loginPage: LoginPageState;
  registerPage: RegisterPageState;
}

export const reducers = (state: AuthState | undefined, action: Action) => combineReducers({
  loginPage: fromLoginPage.reducer,
  registerPage: fromRegisterPage.reducer
})(state, action);

export const selectLoginPageError = (state: AuthState) => state.loginPage.error;
