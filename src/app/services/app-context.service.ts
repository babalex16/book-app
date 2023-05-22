import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AppContextService {
  private static readonly URL = 'http://openlibrary.org/search.json?title=';

  private searchTermSubject = new BehaviorSubject<string>('harry potter');
  private booksSubject = new BehaviorSubject<any[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(true);
  private resultTitleSubject = new BehaviorSubject<string>('');

  searchTerm$: Observable<string> = this.searchTermSubject.asObservable();
  books$: Observable<any[]> = this.booksSubject.asObservable();
  loading$: Observable<boolean> = this.loadingSubject.asObservable();
  resultTitle$: Observable<string> = this.resultTitleSubject.asObservable();

  constructor(private http: HttpClient) { }

  fetchBooks(): void {
    this.loadingSubject.next(true);
    const searchTerm = this.searchTermSubject.getValue();
    this.http.get(`${AppContextService.URL}${searchTerm}`).subscribe(
      (data: any) => {
        console.log(data);
        const { docs } = data;
        this.booksSubject.next(docs);
      },
      (error: any) => {
        console.log(error);
        this.loadingSubject.next(false);
      },
      () => {
        this.loadingSubject.next(false);
      }
    );
  }

  setSearchTerm(term: string): void {
    this.searchTermSubject.next(term);
  }
}
