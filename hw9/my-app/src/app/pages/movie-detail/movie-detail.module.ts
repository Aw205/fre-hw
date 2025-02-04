import { NgModule } from '@angular/core';
import { MovieDetailComponent } from './movie-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { TrailerDialogComponent } from './components/trailer-dialog/trailer-dialog.component';
import { movieDetailGuard } from '../../core/guards/movie-detail.guard';


const routes: Routes = [{ path: '', component: MovieDetailComponent, canActivate:[movieDetailGuard] }];

@NgModule({
  declarations: [MovieDetailComponent,TrailerDialogComponent],
  imports: [
    SharedModule,
    YouTubePlayerModule,
    RouterModule.forChild(routes)
  ]
})
export class MovieDetailModule { }
