import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {
private books:Book[]=[
  {id:1000,title:'c#',writer:'ghaem',publisher:'ahamdi',price:100000},
  {id:2000,title:'Asp.net',writer:'ghaem',publisher:'mohammadi',price:500000},
  {id:3000,title:'java',writer:'bayat',publisher:'ahmadi',price:800000}
]
getBooks(){
  return this.books;
}
addBooks(Book:Book){
this.books.push(Book)
}
}
export interface Book{
  id:number;
  title:string;
  writer:string;
  publisher:string;
  price:number;
}
