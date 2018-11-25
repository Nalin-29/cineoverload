import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchListComponent } from './search-list/search-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MyfavouriteComponent } from './myfavourite/myfavourite.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  { path: 'favourite/:pageId',      component: MyfavouriteComponent },
  {path: 'favourite', component: MyfavouriteComponent},
  {path: 'search-list', component: SearchListComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: '**', component: WelcomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
