import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { PublicRoutingModule } from './public-routing.module';
import { WelcomeModule } from './welcome/welcome.module';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';


@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    PublicRoutingModule,
    WelcomeModule,
    LoginModule,
    RegisterModule
  ]
})
export class PublicModule { }
