import { Component, OnInit } from '@angular/core';
import { Company } from '../models';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent {
  company: Company | undefined;

  constructor(private route: ActivatedRoute, private apiService: ApiService){
  }

  ngOnInit(){
    const routeParams = this.route.snapshot.paramMap;
    const companyIdFromRoute = Number(routeParams.get('id'));

    this.apiService.getCompanyElem(companyIdFromRoute).subscribe((data) => {
      this.company = data;
    })
  }

  deleteCompany(){
    if(this.company){
      this.apiService.deleteCompanyElem(this.company.id).subscribe(response => {
        console.log(response)
      })
    }
  }
}
