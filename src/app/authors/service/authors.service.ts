import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Author } from '../model/author';

@Injectable({
  providedIn: 'root',
})
export class AuthorService {
  private apiUrl = 'http://localhost:8080/authors-api/';

  constructor(private http: HttpClient) {}

  getAuthor(id: string): Observable<Author> {
    return this.http.get<Author>(`${this.apiUrl}authors/${id}`);
  }
}
