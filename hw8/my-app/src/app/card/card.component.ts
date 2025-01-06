import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  
  @Input() bookData!: any;

  constructor(private bookService: BookService) { }

  onClick(bookName: string) {
    this.bookService.addToWishlist(bookName);
  }

}
