import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, pluck, Subject, tap } from 'rxjs';
import { Credits, Movie, MovieImages, Video } from './movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movies$ = new Subject();
  movies: Movie[] = [];

  constructor(private http: HttpClient) { }

  getMovieData() {

    return this.http.get(`https://api.themoviedb.org/3/discover/movie?api_key=58c01d232e6173f5b297b33fa4bb8388`).pipe(
      pluck('results'),
      map((movieArr: any) => {
        return movieArr;
      }
      ),
      tap(movie => {
        for (let m of movie) {
          this.movies.push(m);
        }
      })
    );

  }

  getMovieDetail(id: number) {

    return this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=58c01d232e6173f5b297b33fa4bb8388`);
  }

  getMovieImages(id: number): Observable<MovieImages> {

    return this.http.get(`https://api.themoviedb.org/3/movie/${id}/images?api_key=58c01d232e6173f5b297b33fa4bb8388`) as Observable<MovieImages>;
  }

  getMovieActors(id: number): Observable<Credits> {

    return this.http.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=58c01d232e6173f5b297b33fa4bb8388`) as Observable<Credits>;
  }

  getMovieTrailers(id: number): Observable<Video> {

    return this.http.get(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US&api_key=58c01d232e6173f5b297b33fa4bb8388`) as Observable<Video>;
  }


}
