import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, pluck, Subject, tap } from 'rxjs';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {


  movies$ = new Subject();
  movies: Movie[] = [];


  constructor(private http: HttpClient) { }

  getMovieData(){

    return this.http.get(`https://api.themoviedb.org/3/discover/movie?api_key=58c01d232e6173f5b297b33fa4bb8388`).pipe(
      pluck('results'),
      map((movieArr: any) => {
        // return movieArr.map((item: any) => {
        //   return (({title, authors, publisher, publishedDate, description,imageLinks }) => ({title, authors, publisher, publishedDate, description,imageLinks }))(item.volumeInfo);
        // })
        return movieArr;
      }
      ),
      tap(movie =>{
        // console.log(JSON.stringify(movie[0]));
        for(let m of movie){
          this.movies.push(m);
        }
        //this.movies$.next(arr);
      })
    );

  }

  getMovieDetail(id:number){

      return this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=58c01d232e6173f5b297b33fa4bb8388`).pipe(
        tap(movie => {
          //console.log(movie);
        })
      );
  }

  getMovieImages(id:number){

    return this.http.get(`https://api.themoviedb.org/3/movie/${id}/images?api_key=58c01d232e6173f5b297b33fa4bb8388`).pipe(
      tap(movie => {
        //console.log(JSON.stringify(movie));
      })
    );
}


}
