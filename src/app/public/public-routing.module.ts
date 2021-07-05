import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from '@public/welcome/welcome/welcome.component';
import { LoginComponent } from '@public/login/login/login.component';
import { RegisterComponent } from '@public/register/register/register.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent }, // matching welcome route with welcome component
  { path: 'login', component:LoginComponent},
  { path: 'register', component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
