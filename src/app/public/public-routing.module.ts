import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from '@public/welcome/welcome/welcome.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent } // matching welcome route with welcome component
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
