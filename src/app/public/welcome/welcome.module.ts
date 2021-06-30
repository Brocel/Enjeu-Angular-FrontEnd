import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { LoginModule } from '@public/login/login.module';
import { RegisterModule } from '@public/register/register.module';

import { WelcomeComponent } from './welcome/welcome.component';
import { WelcomeBannerComponent } from './welcome-banner/welcome-banner.component';



@NgModule({
  declarations: [
    WelcomeComponent,
    WelcomeBannerComponent
  ],
  imports: [
    SharedModule,
    LoginModule,
    RegisterModule
  ]
})
export class WelcomeModule { }
