import { Component } from '@angular/core';
import { Event } from '../models';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tickets-buy',
  templateUrl: './tickets-buy.component.html',
  styleUrls: ['./tickets-buy.component.css']
})
export class TicketsBuyComponent {
  event: Event | undefined;
  userId: number = 0;
  ticket_type: string = '';

  constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(){
    const eventId = Number(this.route.snapshot.queryParamMap.get('eventId'));
    this.apiService.getEventElement(eventId).subscribe((event) => {
      this.event = event;
    });

    this.apiService.getUser().subscribe((data) => {
      this.userId = data.id;
    })
  }

  buyTicket(){
    if(this.event){
      console.log(this.event.id, this.userId, this.ticket_type, 1500);
      this.apiService.createTicket(this.event.id, this.userId, this.ticket_type, 1500).subscribe(
        (ticket) => {
          console.log('you bought ticket successfully!', ticket);
          alert("you bought ticket successfully!");
          this.router.navigate(['/tickets']);
        },
        (error) => {
          console.error('Error buying tickets', error);
          alert('Error buying. Please try again.');
        }
      );
    }
  }

}
