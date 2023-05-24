import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AppContextService {
  private static readonly URL = 'http://openlibrary.org/search.json?';


  constructor(private http: HttpClient) { }

  fetchData(searchOption: string, value: string): Observable<any> {
    const replacedStr = value.replace(/ /g, '+').toLowerCase();
    console.log(`${AppContextService.URL}${searchOption}=${replacedStr}`)
    return this.http.get(`${AppContextService.URL}${searchOption}=${replacedStr}`)
  }
}
