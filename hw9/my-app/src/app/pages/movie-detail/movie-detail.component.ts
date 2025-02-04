import { Component, inject, Input } from '@angular/core';
import { MovieImages, Credits, Video } from '../../services/movie';
import { MatDialog } from '@angular/material/dialog';
import { TrailerDialogComponent } from './components/trailer-dialog/trailer-dialog.component';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css',
  standalone: false
})
export class MovieDetailComponent {

  @Input() id!: number;
  Math = Math;
  data!: any;
  imageData!: MovieImages;
  actorData!: Credits;
  videoData!: Video;
  genreNames!: string;
  readonly dialog = inject(MatDialog);


  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.videoData = this.activatedRoute.snapshot.data['videoData'];
    this.imageData = this.activatedRoute.snapshot.data['imageData'];
    this.actorData = this.activatedRoute.snapshot.data['actorData'];
    this.data = this.activatedRoute.snapshot.data['data'];
    this.genreNames = this.data.genres.map((g: { name: any; }) => g.name).join(", ");
  }

  openDialog() {

    this.dialog.open(TrailerDialogComponent, {
      data: {
        key: this.videoData.results[0].key
      }
    });
  }

}
