import { Component, Inject, OnInit, inject } from '@angular/core';
import { Book, BookService } from '../../../+Services/book.service';
import {MatTableModule} from '@angular/material/table';
import { BookDetailsComponent } from '../book-details/book-details.component';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-librariansbooks',
  standalone: true,
  imports: [MatTableModule,BookDetailsComponent,MatButtonModule],
  templateUrl: './librariansbooks.component.html',
  styleUrl: './librariansbooks.component.scss'
})
export class LibrariansbooksComponent implements OnInit{
  data:Book[]=[];
  ca='list';
  Bookservice=inject(BookService);
  ngOnInit(): void {
   this.data=this.Bookservice.getBooks();
  }
  displayedColumns: string[] = ['id', 'title', 'writer', 'publisher','price'];
  addclick(){
    this.ca='add';
  }
}
