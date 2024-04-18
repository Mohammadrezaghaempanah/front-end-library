import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {
private books:Book[]=[];
getBooks(){
  this.load();
  return this.books;
}
addBooks(Book:Book){
this.books.push(Book);
this.save();
}
editBooks(Book:Book){
  let result=this.books.filter(b=>b.id==Book.id);
  if(result.length>0){
    result[0].title=Book.title;
    result[0].writer=Book.writer;
    result[0].publisher=Book.publisher;
    result[0].price=Book.price;
    this.save();
  }
}
deleteBooks(Book:Book){
 this.books=this.books.filter(b=>b.id!==Book.id);
 this.save();
}
private save(){
  localStorage.setItem('books',JSON.stringify(this.books));
}
private load(){
  this.books=JSON.parse(localStorage.getItem('books')??'[]')
}
}
export interface Book{
  id:number;
  title:string;
  writer:string;
  publisher:string;
  price:number;
}
