import { Component, Input } from '@angular/core';
import { Event } from '../models';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-events-item',
  templateUrl: './events-item.component.html',
  styleUrls: ['./events-item.component.css']
})
export class EventsItemComponent {
  @Input() event!: Event;
}
