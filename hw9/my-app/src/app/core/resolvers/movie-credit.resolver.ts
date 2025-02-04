import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { Observable } from 'rxjs';
import { Credits } from '../../services/movie';

export const movieCreditResolver: ResolveFn<Observable<Credits>> = (route, state) => {
  const service = inject(MovieService);
  return service.getMovieActors(route.params['id']);
};
