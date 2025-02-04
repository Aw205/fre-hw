import { ResolveFn } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { inject } from '@angular/core';
import { map, Observable } from 'rxjs';

export const moviePosterResolver: ResolveFn<Observable<any>> = (route, state) => {

  const service = inject(MovieService);
  return service.getMovieImages(route.params['id']);
};
