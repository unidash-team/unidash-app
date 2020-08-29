import { createAction, props } from '@ngrx/store';
import { Register } from '../../models';

export const register = createAction(
  '[Register Page] Register Request',
  props<{ register: Register }>()
)