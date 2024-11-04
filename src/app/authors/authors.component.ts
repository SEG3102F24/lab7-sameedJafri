// authors.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Author } from './model/author';
import { AuthorService } from './service/authors.service';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { AuthorComponent } from "./author/author.component";

@Component({
  selector: 'app-authors',
  standalone: true,
  imports: [RouterModule, NgbModule, CommonModule, ReactiveFormsModule, AuthorComponent],
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authorsForm: FormGroup;
  selectedAuthor?: Author;

  constructor(private fb: FormBuilder, private authorService: AuthorService) {
    this.authorsForm = this.fb.group({
      authorId: ['']
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    const authorId = this.authorsForm.get('authorId')?.value;
    this.submit(authorId);
  }

  submit(authorId: string): void {
    this.authorService.getAuthor(authorId).subscribe(
      (author: Author) => {
        this.selectedAuthor = author;
      },
      (error: any) => {
        this.selectedAuthor = undefined;
        console.error('Author not found', error);
      }
    );
  }
}