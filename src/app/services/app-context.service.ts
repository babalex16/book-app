import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AppContextService {
  private static readonly URL = 'http://openlibrary.org/search.json?title=';


  constructor(private http: HttpClient) { }

  fetchBooks(searchTerm: string): Observable<any> {
    return this.http.get(`${AppContextService.URL}${searchTerm}`)
  }

  // setSearchTerm(term: string): void {
  //   this.searchTermSubject.next(term);
  // }
}
