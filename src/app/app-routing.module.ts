import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


import {SignInComponent} from './iam/pages/sign-in/sign-in.component';
import {SignUpComponent} from './iam/pages/sign-up/sign-up.component';
import {ResetPasswordComponent} from './iam/pages/reset-password/reset-password.component';


const routes: Routes = [
  /* General routes */
  {path: 'sign-in', component: SignInComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'reset-password', component: ResetPasswordComponent},





  /* Extra routes */
  {path: '', redirectTo: '/sign-in', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
