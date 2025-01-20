import { NgModule } from '@angular/core';
import { MovieListComponent } from './movie-list.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { CommonModule } from '@angular/common';
import { movieListGuard } from '../../core/guards/movie-list.guard';


const routes: Routes = [{ path: '', component: MovieListComponent, canActivate: [movieListGuard] }];

@NgModule({
  declarations: [MovieListComponent, MovieItemComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class MovieListModule { }
