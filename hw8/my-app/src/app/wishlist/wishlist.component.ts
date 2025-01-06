import { Component } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent {

  constructor(public bookService: BookService){}


}
