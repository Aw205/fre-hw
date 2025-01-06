import { Component } from '@angular/core';
import { BookService } from '../book.service';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {

  value:string="";

  constructor(private bookService: BookService){}

  onInput(){
    this.bookService.getBookData(this.value).subscribe();
  }

}
