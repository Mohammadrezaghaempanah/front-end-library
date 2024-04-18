import { Component, EventEmitter, inject, Input, input, OnInit, Output } from '@angular/core';

import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { Book } from '../../../+Services/book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
  ]
})
export class BookDetailsComponent implements OnInit {

  private fb = inject(FormBuilder);
  bookForm = this.fb.group({
    id: null,
    title: [null, Validators.required],
    writer: [null, Validators.required],
    publisher: [null, Validators.required],
    price: null,
  });
  @Output() onCancle = new EventEmitter();
  @Output() onOk = new EventEmitter<Book>();
  @Input() data: any
  @Input() action:string=''

  ngOnInit(): void {
if(this.action=='add'){
}
else if(this.action=='edit'){
  this.bookForm.controls.id.disable();
}
else if(this.action=='delete'){
  this.bookForm.disable();
}
    if (this.data) {
      this.bookForm.controls.id.setValue(this.data.id);
      this.bookForm.controls.title.setValue(this.data.title);
      this.bookForm.controls.writer.setValue(this.data.writer);
      this.bookForm.controls.publisher.setValue(this.data.publisher);
      this.bookForm.controls.price.setValue(this.data.price);
    }
  }
  submitok() {
    this.onOk.emit({
      id: this.bookForm.controls.id.value ?? 0,
      title: this.bookForm.controls.title.value ?? '',
      writer: this.bookForm.controls.writer.value ?? '',
      publisher: this.bookForm.controls.publisher.value ?? '',
      price: this.bookForm.controls.price.value ?? 0,
    })
  }
}

