import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BooksService } from '../books/service/books.service';
import { CommonModule, NgIf } from '@angular/common';


@Component({
  selector: 'app-authors',
  standalone: true,
  imports: [NgIf, CommonModule, ReactiveFormsModule],
  templateUrl: './authors.component.html',
  styleUrl: './authors.component.css'
})
export class AuthorsComponent {
  authorsForm: FormGroup;
  authorData: any = null;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private booksService: BooksService) {
    this.authorsForm = this.fb.group({
      authorId: ['']
    });
  }

  onSubmit() {
    this.booksService.getAuthor(this.authorsForm.value.authorId)
      .subscribe(
        (data: any) => {
          this.authorData = data;
          this.errorMessage = '';
        },
        (error: string) => {
          this.errorMessage = 'Author not found';
          this.authorData = null;
        }
      );
  }
}
