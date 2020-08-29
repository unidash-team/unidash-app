import { createAction, props } from '@ngrx/store';
import { AuthResponse } from '../../models';

export const loginSuccess = createAction(
  '[Auth API] Login Success',
  props<{ response: AuthResponse }>()
);

export const loginFailure = createAction(
  '[Auth API] Login Failure',
  props<{ error: any }>()
);

export const registerSuccess = createAction(
  '[Auth API] Register Success',
  props<{ response: AuthResponse }>()
);

export const registerFailure = createAction(
  '[Auth API] Register Failure',
  props<{ error: any }>()
);
