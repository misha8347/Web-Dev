import { Component, OnInit } from '@angular/core';
import { Event } from '../models';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-events-create',
  templateUrl: './events-create.component.html',
  styleUrls: ['./events-create.component.css']
})
export class EventsCreateComponent {
  event: Event | undefined;

  constructor(private apiService: ApiService, private route: ActivatedRoute){
    this.event = {} as Event;
  }

  eventName: any;
  eventDescription: any;
  eventImage: any;
  eventDateTime: any;
  eventOrganizer: any;

  postEvent(){
    this.apiService.createEventElem(this.eventName, this.eventDescription, this.eventImage, this.eventDateTime, this.eventOrganizer).subscribe(response => {
      console.log(response);
    })
  }
}
