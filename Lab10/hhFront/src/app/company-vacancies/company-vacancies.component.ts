import { Component, Input } from '@angular/core';
import { Company, Vacancy } from '../models';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-company-vacancies',
  templateUrl: './company-vacancies.component.html',
  styleUrls: ['./company-vacancies.component.css']
})
export class CompanyVacanciesComponent {
  company: Company | undefined;
  vacancy_list: Vacancy[] = [];

  constructor(private route: ActivatedRoute, private apiService: ApiService){
  }

  ngOnInit(){
    const routeParams = this.route.snapshot.paramMap;
    const companyIdFromRoute = Number(routeParams.get('id'));

    this.apiService.getCompanyVacancies(companyIdFromRoute).subscribe((data) => {
      this.vacancy_list = data;
    })
  }
}
