import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { News } from './models';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  BASE_URL = 'http://127.0.0.1:8000'

  constructor(private client: HttpClient) { }

  getNewsList(): Observable<News[]>{
    return this.client.get<News[]>(
      `${this.BASE_URL}/api/news/`
    )
  }
}
