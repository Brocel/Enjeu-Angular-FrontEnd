import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { WelcomeBannerComponent } from './welcome-banner/welcome-banner.component';



@NgModule({
  declarations: [
    WelcomeComponent,
    WelcomeBannerComponent
  ],
  imports: [
    SharedModule
  ]
})
export class WelcomeModule { }
