import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { map, Observable } from 'rxjs';
import { MovieService } from '../../services/movie.service';
import { Video } from '../../services/movie';

export const movieVideoResolver: ResolveFn<Observable<Video>> = (route, state) => {
  const service = inject(MovieService);
  return service.getMovieTrailers(route.params['id']);
};
