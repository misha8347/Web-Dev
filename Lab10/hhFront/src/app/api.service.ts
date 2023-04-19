import { Injectable } from '@angular/core';
import {Observable} from "rxjs"
import { Company, Vacancy } from './models';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  BASE_URL = 'http://localhost:8000'

  constructor(private client: HttpClient) { }

  //api for companies

  getCompaniesList(): Observable<Company[]>{
    return this.client.get<Company[]>(
      `${this.BASE_URL}/api/companies`
    )
  }

  postCompanyElem(name: string, description: string, city: string, address: string): Observable<Company>{
    return this.client.post<Company>(
      `${this.BASE_URL}/api/companies`,
      {name: name, description: description, city: city, address: address}
    )
  }

  updateCompanyElem(id: number, name: string, description: string, city: string, address: string): Observable<Company>{
    return this.client.put<Company>(
        `${this.BASE_URL}/api/companies/${id}`,
        {name: name, description: description, city: city, address: address}
    )
  }

  deleteCompanyElem(company_id: number): Observable<any>{
    return this.client.delete(
      `${this.BASE_URL}/api/companies/${company_id}`
    )
  }

  getCompanyElem(company_id: number): Observable<Company>{
    return this.client.get<Company>(
      `${this.BASE_URL}/api/companies/${company_id}`
    )
  }

  getCompanyVacancies(company_id: number): Observable<Vacancy[]>{
    return this.client.get<Vacancy[]>(
      `${this.BASE_URL}/api/companies/${company_id}/vacancies`
    )
  }


  //api for vacancies
  getVacanciesList(): Observable<Vacancy[]>{
    return this.client.get<Vacancy[]>(
      `${this.BASE_URL}/api/vacancies`
    )
  }

  createVacancyElem(name: string, description: string, salary: number, company: Company): Observable<Vacancy>{
    return this.client.post<Vacancy>(
      `${this.BASE_URL}/api/vacancies`,
      {name: name, description: description, salary: salary, company: company}
    )
  }

  getVacancyElem(vacancy_id: number): Observable<Vacancy>{
    return this.client.get<Vacancy>(
      `${this.BASE_URL}/api/vacancies/${vacancy_id}`
    )
  }

  updateVacancyElem(id: number, name: string, description: string, salary: number, company: Company): Observable<Vacancy>{
    return this.client.put<Vacancy>(
      `${this.BASE_URL}/api/vacancies/${id}`,
      {name: name, description: description, salary: salary, company: company}
    )
  }

  deleteVacancyElem(id: number): Observable<any>{
    return this.client.delete(
      `${this.BASE_URL}/api/vacancies/${id}`
    )
  }


  getVacanciesTopTen(): Observable<Vacancy[]>{
    return this.client.get<Vacancy[]>(
      `${this.BASE_URL}/api/vacancies/top_ten`
    )
  }
}
