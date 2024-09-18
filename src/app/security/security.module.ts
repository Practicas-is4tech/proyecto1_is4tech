import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Router } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SecurityRoutingModule } from './security-routing.module';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    SecurityRoutingModule  
  ],
  exports: [LoginComponent]
})
export class SecurityModule { }
