import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegisterTmdbComponent } from './register-tmdb/register-tmdb.component';
import { RegisterPlanComponent } from './register-plan/register-plan.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', redirectTo: '/movielist', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent, children: [
    { path: 'register', component: RegisterComponent },
    { path: 'register-plan', component: RegisterPlanComponent },
    { path: 'register-tmdb', component: RegisterTmdbComponent },
  ] },
  { path: 'movielist', component: MovieListComponent },
  { path: 'details/:id', component: MovieDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ bindToComponentInputs: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
