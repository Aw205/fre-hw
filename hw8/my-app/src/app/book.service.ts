
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, pluck, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BookService {

  books$: Subject<any> = new Subject();
  wishlistBooks = new Set<string>();

  constructor(private http: HttpClient) { }

  getBookData(bookName: string): Observable<any> {

    return this.http.get(`https://www.googleapis.com/books/v1/volumes?q=${bookName}`).pipe(
      pluck('items'),
      map((itemArr: any) => {
        return itemArr.map((item: any) => {
          return (({ title, authors, publisher, publishedDate, description, imageLinks }) => ({ title, authors, publisher, publishedDate, description, imageLinks }))(item.volumeInfo);
        })
      }
      ),
      tap(arr => {
        this.books$.next(arr);
      })
    );

  }

  addToWishlist(bookName: string) {

    this.wishlistBooks.add(bookName);

  }

  removeBook(bookName: string) {

    this.wishlistBooks.delete(bookName);

  }
}
