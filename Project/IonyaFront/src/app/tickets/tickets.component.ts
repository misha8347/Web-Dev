import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Ticket, Event } from '../models';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})

export class TicketsComponent {
  tickets_list: Ticket[] = [];
  events_list: Event[] = [];

  TICKET_TYPES = [
    { value: 'standard', label: 'Standard' },
    { value: 'VIP', label: 'VIP' },
    { value: 'premium', label: 'Premium' },
  ];

  constructor(private apiService: ApiService) {}

  ngOnInit(){
    this.getEventsList();
    this.getUserTicketList();
  }

  getUserTicketList(){
    this.apiService.getUserTicketsList().subscribe((data) => {
      this.tickets_list = data;
    })
  }

  getEventsList() {
    this.apiService.getEventList().subscribe((data) => {
      this.events_list = data;
    });
  }

  getEventById(eventId: number): Event | undefined {
    return this.events_list.find(e => e.id === eventId);
  }
}
