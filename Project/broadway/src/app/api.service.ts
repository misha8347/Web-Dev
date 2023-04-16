import { Injectable } from '@angular/core';
import {Observable} from "rxjs"
import { News, Event } from './models'
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  BASE_URL = 'http://localhost:8000'
  
  constructor(private client: HttpClient) { 

  }

  //API for news
  getNewsList(): Observable<News[]>{
    return this.client.get<News[]>(
      `${this.BASE_URL}/api/news/`
    )
  }

  getNewsElement(newsId: number): Observable<News>{
    return this.client.get<News>(
      `${this.BASE_URL}/api/news/${newsId}/`
    )
  }

  createNewsElem(newsTitle: string, newsText: string, newsImage: string): Observable<News>{
    return this.client.post<News>(
      `${this.BASE_URL}/api/news/`,
      {title: newsTitle, text: newsText, image: newsImage, likes: 0, dislikes: 0}
    )
  }

  deleteNewsElem(news_id: number): Observable<any>{
    return this.client.delete(
      `${this.BASE_URL}/api/news/${news_id}/`
    )
  }


  //API for events

  getEventList(): Observable<Event[]>{
    return this.client.get<Event[]>(
      `${this.BASE_URL}/api/events/`
    )
  }

  getEventElement(eventId: number): Observable<Event>{
    return this.client.get<Event>(
      `${this.BASE_URL}/api/events/${eventId}/`
    )
  }

  createEventElem(eventName: string, eventDescription: string, eventImage: string, eventDateTime: string, eventOrganizer: string): Observable<Event>{
    const datePipe = new DatePipe('en-US')
    const formattedEventDateTime = datePipe.transform(eventDateTime, 'yyyy-MM-ddTHH:mm:ssZ')
    return this.client.post<Event>(
      `${this.BASE_URL}/api/events/`,
      {name: eventName, description: eventDescription, image: eventImage, date_time: formattedEventDateTime, organizer: eventOrganizer, likes: 0, dislikes: 0}
    )
  }

  deleteEventElem(event_id: number): Observable<any>{
    return this.client.delete(
      `${this.BASE_URL}/api/events/${event_id}/`
    )
  }
}
