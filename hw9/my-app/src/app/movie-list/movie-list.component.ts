import { Component } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {


  constructor(public movieService: MovieService) { }

  ngOnInit(){

    this.movieService.getMovieData().subscribe();
    // this.movieService.movies$.subscribe();

  }

}
