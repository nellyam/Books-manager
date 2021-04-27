import { Injectable } from '@angular/core';
import { Book } from 'src/app/models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  books: Array<Book>;

  constructor() {
    this.books = [];

    for(let i = 1; i <= 10; i++) {
      this.books.push(new Book("Livre " + i, "Auteur " + i, "Lorem ipsum",  "Libre"));
    }
  }
  /**
   * Method to switch all the book status
   * @param newstatus
   */

  switchAllBooksStatus(newStatus: string) {
    for(let book of this.books) {
      book.status = newStatus;
    }
  }

   /**
   * Method to switch all a book status
   * @param bookId
   * @param newstatus
   */
    switchBookStatus(bookId: number, newStatus: string) {

    for(let book of this.books) {
      for(let book of this.books) {
              if(book.id == bookId) {
        book.status = newStatus;
        break;
      }
      }

    }
  }

  /**
   *Method to retrieve a book by its id
   * @param bookId
   */
  getElementById(bookId: number) {
     for(let book of this.books) {
     if(book.id == bookId) {
        return book;
    }
  }
  return null;
 }

}
