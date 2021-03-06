import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

import { UsersComponent } from './users.component';

const routes: Routes = [{
  path: '', component: UsersComponent, children: [
    { path: '', component: SigninComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'signup', component: SignupComponent },
    
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
