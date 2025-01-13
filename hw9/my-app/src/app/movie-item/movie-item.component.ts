import { Component, Input } from '@angular/core';
import { Movie } from '../movie';

@Component({
    selector: 'app-movie-item',
    templateUrl: './movie-item.component.html',
    styleUrl: './movie-item.component.css',
    standalone: false
})
export class MovieItemComponent {

  @Input() data!: Movie;

  constructor(){}

}
