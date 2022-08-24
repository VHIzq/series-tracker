import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  private baseUrl = environment.baseUrl;



  constructor( private http: HttpClient) { }

  getAnimes(searchTerm: string): Observable<any> {
    const url = `${this.baseUrl}${searchTerm}`;
    return this.http.get(url);
  }
}
