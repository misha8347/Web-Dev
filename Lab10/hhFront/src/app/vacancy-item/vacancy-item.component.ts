import { Component, Input } from '@angular/core';
import { Vacancy } from '../models';


@Component({
  selector: 'app-vacancy-item',
  templateUrl: './vacancy-item.component.html',
  styleUrls: ['./vacancy-item.component.css']
})
export class VacancyItemComponent {
  @Input() vacancy!: Vacancy;
}
