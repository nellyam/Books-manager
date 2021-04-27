import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { BookService } from 'src/app/services/book/book.service';

@Component({
  selector: '[app-table-row]',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.css']
})
export class TableRowComponent implements OnInit, OnChanges{

  @Input() id: number;
  @Input() title: string;
  @Input() author: string;
  @Input() status: string;

  nextStatus: string;
  detailUrl: string;
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
   this.detailUrl = '/book/' + this.id;
  }

  ngOnChanges(): void {
     this.nextStatus = this.status === 'Libre' ? 'Pris' : 'Libre';
  }

  /**
   * Method called when the user clicks on
   * switch button
   */
   onClickSwitchBookStatus(newStatus: string) {
      this.bookService.switchBookStatus(this.id, newStatus);
   }

}
