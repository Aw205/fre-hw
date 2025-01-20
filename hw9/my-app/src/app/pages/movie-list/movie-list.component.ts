import { Component } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
    selector: 'app-movie-list',
    templateUrl: './movie-list.component.html',
    styleUrl: './movie-list.component.css',
    standalone: false
})
export class MovieListComponent {


  constructor(public movieService: MovieService) { }

  ngOnInit(){

    this.movieService.getMovieData().subscribe();
    // this.movieService.movies$.subscribe();

  }

}
