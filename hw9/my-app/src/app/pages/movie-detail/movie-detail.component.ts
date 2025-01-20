import { Component, inject, Input } from '@angular/core';
import { MovieImages,Credits,Video } from '../../services/movie';
import { MatDialog } from '@angular/material/dialog';
import { TrailerDialogComponent } from './components/trailer-dialog/trailer-dialog.component';
import { MovieService } from '../../services/movie.service';


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
  actorData!:Credits;
  videoData!:Video;
  readonly dialog = inject(MatDialog);
 

  constructor(private movieService: MovieService){}

  ngOnInit(){ 

    this.movieService.getMovieDetail(this.id).subscribe((val)=>{
      this.data = val;
    });

    this.movieService.getMovieImages(this.id).subscribe((val)=>{
      this.imageData = val as MovieImages;
    });

    this.movieService.getMovieActors(this.id).subscribe((val)=>{
      this.actorData = val as Credits;
    });
    this.movieService.getMovieTrailers(this.id).subscribe((val)=>{
      this.videoData = val as Video;
    });

  }

  openDialog() {

    console.log(this.videoData.results[0].key);
    const dialogRef = this.dialog.open(TrailerDialogComponent,{
      data:{
        key: this.videoData.results[0].key
      }
    });

  }

}
