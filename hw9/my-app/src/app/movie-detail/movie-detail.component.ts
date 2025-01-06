import { Component, Input } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.scss'
})
export class MovieDetailComponent {

  @Input() id!: number;
  data:any;

  constructor(private movieService: MovieService){}

  ngOnInit(){ 

    this.movieService.getMovieDetail(this.id).subscribe((val)=>{

      this.data = val;

    });

  }

}
