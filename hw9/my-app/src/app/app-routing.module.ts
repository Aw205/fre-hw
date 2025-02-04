import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { moviePosterResolver } from './core/resolvers/movie-poster.resolver';
import { movieCreditResolver } from './core/resolvers/movie-credit.resolver';
import { movieDetailResolver } from './core/resolvers/movie-detail.resolver';
import { movieVideoResolver } from './core/resolvers/movie-video.resolver';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home', loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule)
  },
  {
    path: 'login', loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule)
  },
  {
    path: 'signup', loadChildren: () =>
      import('./pages/signup/signup.module').then((m) => m.SignupModule)
  },
  {
    path: 'movielist', loadChildren: () =>
      import('./pages/movie-list/movie-list.module').then((m) => m.MovieListModule)
  },
  {
    path: 'movielist/:id', loadChildren: () =>
      import('./pages/movie-detail/movie-detail.module').then((m) => m.MovieDetailModule),
    resolve: {
      videoData: movieVideoResolver,
      imageData: moviePosterResolver,
      actorData: movieCreditResolver,
      data: movieDetailResolver
  
    },
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
