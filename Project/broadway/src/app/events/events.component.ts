import { Component } from '@angular/core';
import { Event } from '../models';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent{

  events_list: Event[] = [];
  constructor(private apiService: ApiService){

  }

  ngOnInit(){
    this.getEventList()
  }

  getEventList(){
    return this.apiService.getEventList().subscribe((data) => {
      this.events_list = data;
    })
  }


}
