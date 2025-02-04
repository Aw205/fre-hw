import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { map, Observable } from 'rxjs';
import { MovieService } from '../../services/movie.service';

export const movieDetailResolver: ResolveFn<Observable<any>> = (route, state) => {
  const service = inject(MovieService);
  return service.getMovieDetail(route.params['id']);
};
