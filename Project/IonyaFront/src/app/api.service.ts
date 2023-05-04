import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { News, Event, AuthToken, Club, Location, User, Ticket } from './models';
import { Observable } from 'rxjs'
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  BASE_URL = 'http://127.0.0.1:8000'
  user: User = {} as User;

  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private client: HttpClient, ) {
  }

  //API for register
  register(username: string, password: string, email: string, first_name: string, last_name: string): Observable<User>{
    return this.client.post<User>(
      `${this.BASE_URL}/api/register/`,
      {username: username, password: password, email: email, first_name: first_name, last_name: last_name}
    )
  }

  //API for login

  getUser(): Observable<User>{
    return this.client.get<User>(
      `${this.BASE_URL}/api/user/`
    )
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  login(username: string, password: string): Observable<AuthToken>{
    return this.client.post<AuthToken>(
      `${this.BASE_URL}/api/login/`,
      {username, password}
    )
  }

  logout(): void {
    localStorage.removeItem('auth_token');
  }

  isLoggedIn(): boolean{
    const token = localStorage.getItem('token');
    if (token) {
      return true;
    }
    return false;
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

  createNewsElem(newsTitle: string, newsText: string, newsImage: string, clubId: number): Observable<News>{

    const body = newsImage ? { title: newsTitle, text: newsText, image: newsImage, club: clubId, likes: 0, dislikes: 0 } : { title: newsTitle, text: newsText, club: clubId, likes: 0, dislikes: 0 };

    return this.client.post<News>(
      `${this.BASE_URL}/api/news/`,
      body
    );
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

    //API for clubs

    getClubList(): Observable<Club[]>{
      return this.client.get<Club[]>(
        `${this.BASE_URL}/api/clubs/`
      )
    }

    getClubElement(clubId: number): Observable<Club>{
      return this.client.get<Club>(
        `${this.BASE_URL}/api/clubs/${clubId}/`
      )
    }

    createClubElem(clubName: string, clubDescription: string, clubLogo: string): Observable<Event>{
      return this.client.post<Event>(
        `${this.BASE_URL}/api/events/`,
        {name: clubName, description: clubDescription, logo: clubLogo, likes: 0, dislikes: 0}
      )
    }

    deleteClubElem(club_id: number): Observable<any>{
      return this.client.delete(
        `${this.BASE_URL}/api/events/${club_id}/`
      )
    }

    getClubElemNews(clubId: number): Observable<News[]>{
      return this.client.get<News[]>(
        `${this.BASE_URL}/api/clubs/${clubId}/news/`
      )
    }

    getClubElemEvents(clubId: number): Observable<Event[]>{
      return this.client.get<Event[]>(
        `${this.BASE_URL}/api/clubs/${clubId}/events/`
      )
    }


    //API for locations

    getLocationList(): Observable<Location[]>{
      return this.client.get<Location[]>(
        `${this.BASE_URL}/api/locations/`
      )
    }


    getLocationElement(location_id: number): Observable<Location>{
      return this.client.get<Location>(
        `${this.BASE_URL}/api/locations/${location_id}/`
      )
    }

    createLocationElem(city: string, address: string): Observable<Location>{
      return this.client.post<Location>(
        `${this.BASE_URL}/api/locations/`,
        {city: city, address: address}
      )
    }

    deleteLocationElem(location_id: number): Observable<any>{
      return this.client.delete(
        `${this.BASE_URL}/api/locations/${location_id}`
      )
    }

    getLocationEvents(location_id: number): Observable<Event[]>{
      return this.client.get<Event[]>(
        `${this.BASE_URL}/api/location/${location_id}/events`
      )
    }

  //Ionya's function


  getMainNews(): Observable<any> {
    return this.client.get(this.BASE_URL + '/api/main/news/',
      {headers: this.httpHeaders});
  }

  getAllNews(): Observable<any> {
    return this.client.get(this.BASE_URL + '/api/news/',
      {headers: this.httpHeaders});
  }

  getAllEvents(): Observable<any> {
    return this.client.get(this.BASE_URL + '/api/events/',
      {headers: this.httpHeaders});
  }

  getNewEvents(): Observable<any> {
    return this.client.get(this.BASE_URL + '/api/main/events/',
      {headers: this.httpHeaders});
  }

  getTopEvents(): Observable<any> {
    return this.client.get(this.BASE_URL + '/api/events/topFive/',
      {headers: this.httpHeaders}) ;
  }


  getNewsById(id: number): Observable<any> {

    const url = `${this.BASE_URL}/api/news/${id}/`;
    return this.client.get(url)
    // return this.http.get(this.baseurl + '/api/news/' + id ,
    //   {headers: this.httpHeaders}) ;
  }

  getMainClubs(): Observable<any> {
    return this.client.get(this.BASE_URL + '/api/main/clubs/',
      {headers: this.httpHeaders}) ;
  }


  //API for tickets

  getUserTicketsList(): Observable<Ticket[]>{
    return this.client.get<Ticket[]>(
      `${this.BASE_URL}/api/tickets/`
    )
  }

  getUserTicketDetails(ticket_id: number): Observable<Ticket>{
    return this.client.get<Ticket>(
      `${this.BASE_URL}/api/tickets/${ticket_id}/`
    )
  }

  createTicket(event: number, user: number, ticket_type: string, standard_cost: number): Observable<Ticket>{
    return this.client.post<Ticket>(
      `${this.BASE_URL}/api/tickets/`,
      {event, user, ticket_type, standard_cost}
    )
  }

  deleteTicket(ticket_id: number): Observable<any>{
    return this.client.delete(
      `${this.BASE_URL}/api/tickets/${ticket_id}/`
    )
  }
}
