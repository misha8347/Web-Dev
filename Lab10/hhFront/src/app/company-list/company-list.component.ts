import { Component, OnInit } from '@angular/core';
import { Company } from '../models';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent {
  company_list: Company[] = [];

  constructor(private apiService: ApiService){}

  ngOnInit(){
    this.getCompanies()
  }

  getCompanies(){
    this.apiService.getCompaniesList().subscribe((data) => {
      this.company_list = data;
    })
  }

  postCompany(name: string, description: string, city: string, address: string){
    this.apiService.postCompanyElem(name, description, city, address).subscribe((data) => {
      this.company_list.push(data);
    })
  }

  deleteCompany(id: number){
    this.apiService.deleteCompanyElem(id).subscribe((data) => {
      this.company_list = this.company_list.filter((news) => news.id != id)
    })
  }
}
