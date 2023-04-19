import { Component, OnInit } from '@angular/core';
import { Vacancy } from '../models'
import { ApiService } from '../api.service';

@Component({
  selector: 'app-vacancy-list',
  templateUrl: './vacancy-list.component.html',
  styleUrls: ['./vacancy-list.component.css']
})
export class VacancyListComponent {
  vacancy_list: Vacancy[] = [];

  constructor(private apiService: ApiService){}

  ngOnInit(){
    this.getVacancies();
  }

  getVacancies(){
    this.apiService.getVacanciesList().subscribe((data) => {
      this.vacancy_list = data;
    })
  }
}
