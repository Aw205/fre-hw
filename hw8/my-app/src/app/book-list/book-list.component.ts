import { Component } from '@angular/core';
import { BookService } from '../book.service';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {

  bookList: any[] = [];

  constructor(private bookService: BookService) { }

  ngOnInit() {

    this.bookService.books$.pipe(debounceTime(400)).subscribe(data => {
      this.bookList = data;
    });

  }



}
