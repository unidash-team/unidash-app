import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginPage } from './pages/login/login.page';
import { RegisterPage } from './pages/register/register.page';
import { IonicModule } from '@ionic/angular';
import { AuthStoreModule } from './store/auth-store.module';


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
