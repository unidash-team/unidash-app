import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from "@ngrx/effects";

import * as fromAuth from "./reducers";
import { LoginEffects } from './effects';

@NgModule({
  imports: [
    CommonModule,

    StoreModule.forFeature(
      'auth',
      fromAuth.reducers
    ),

    EffectsModule.forFeature([
      LoginEffects,
    ])
  ]
})
export class AuthStoreModule { }