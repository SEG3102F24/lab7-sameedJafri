import { Component, Input } from '@angular/core';
import { Author } from '../model/author';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-author',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './author.component.html',
  styleUrl: './author.component.css'
})
export class AuthorComponent {
  @Input() selectedAuthor?: Author;

}
