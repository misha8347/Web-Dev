import { Component, OnInit } from '@angular/core';
import { Vacancy } from '../models';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-vacancy-detail',
  templateUrl: './vacancy-detail.component.html',
  styleUrls: ['./vacancy-detail.component.css']
})
export class VacancyDetailComponent {
  vacancy: Vacancy | undefined;

  constructor(private route: ActivatedRoute, private apiService: ApiService){
  }

  ngOnInit(){
    const routeParams = this.route.snapshot.paramMap;
    const vacancyIdFromRoute = Number(routeParams.get('id'));

    this.apiService.getVacancyElem(vacancyIdFromRoute).subscribe((data) => {
      this.vacancy = data;
    })
  }

  deleteVacancy(){
    if(this.vacancy){
      this.apiService.deleteVacancyElem(this.vacancy.id).subscribe(response => {
        console.log(response);
      })
    }
  }
}
