import { IonicModule } from '@ionic/angular';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthStoreModule } from './store/auth-store.module';

import { LoginPage } from './pages/login/login.page';
import { RegisterPage } from './pages/register/register.page';


@NgModule({
  declarations: [
    LoginPage,
    RegisterPage
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    AuthStoreModule,

    FormsModule,
    ReactiveFormsModule,

    IonicModule
  ]
})
export class AuthModule { }
