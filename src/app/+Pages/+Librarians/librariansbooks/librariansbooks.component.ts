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
okclick(book:Book) {
  if(this.ca=='add'){
 this.Bookservice.addBooks(book);
  }
else if(this.ca=='edit'){
  this.Bookservice.editBooks(book);
}
else if(this.ca=='delete'){
  this.Bookservice.deleteBooks(book)
}
this.data=this.Bookservice.getBooks();
this.ca='list'
}
  data:Book[]=[];
  ca='list';
  cb:any;
  Bookservice=inject(BookService);
  ngOnInit(): void {
   this.data=this.Bookservice.getBooks();
  }
  displayedColumns: string[] = ['id', 'title', 'writer', 'publisher','price','action'];
  addclick(){
    this.ca='add';
    this.cb=undefined;
  }
 cancleclick(){
  this.ca='list'
 }
 editclick(element:any){
  this.ca='edit';
  this.cb=element;
 }
 deleteclick(element: any) {
 this.cb=element;
 this.ca='delete';
  }
}
