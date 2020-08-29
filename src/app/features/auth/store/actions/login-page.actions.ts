import { createAction, props } from '@ngrx/store';

import { Login } from '../../models';

export const login = createAction(
  '[Login Page] Login Request',
  props<{ login: Login }>()
)