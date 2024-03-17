import { Component, inject } from '@angular/core';

import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';


@Component({
  selector: 'app-librarianslogin',
  templateUrl: './librarianslogin.component.html',
  styleUrl: './librarianslogin.component.scss',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule
  ]
})
export class LibrariansloginComponent {
  private fb = inject(FormBuilder);
  loginForm = this.fb.group({
   username: [null, Validators.required],
    password: [null, Validators.required],
  });
  router=inject(Router)
  onSubmit(): void {
    this.router.navigateByUrl('/librarians');
  }
}
