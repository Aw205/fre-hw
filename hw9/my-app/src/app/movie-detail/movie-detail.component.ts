import { Component, Input } from '@angular/core';
import { MovieService } from '../movie.service';
import { MovieImages } from '../movie';

@Component({
    selector: 'app-movie-detail',
    templateUrl: './movie-detail.component.html',
    styleUrl: './movie-detail.component.css',
    standalone: false
})
export class MovieDetailComponent {

  @Input() id!: number;
  Math = Math;
  data!:any;
  imageData!:MovieImages;

  constructor(private movieService: MovieService){}

  ngOnInit(){ 

    this.movieService.getMovieDetail(this.id).subscribe((val)=>{
      this.data = val;
    });

    this.movieService.getMovieImages(this.id).subscribe((val)=>{
      this.imageData = val as MovieImages;
    });

  }

}
