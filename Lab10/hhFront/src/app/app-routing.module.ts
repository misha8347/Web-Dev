import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { VacancyListComponent } from './vacancy-list/vacancy-list.component';
import { VacancyDetailComponent } from './vacancy-detail/vacancy-detail.component';
import { CompanyVacanciesComponent } from './company-vacancies/company-vacancies.component';
import { VacancyCreateComponent } from './vacancy-create/vacancy-create.component';

const routes: Routes = [
  {path: 'companies', component: CompanyListComponent},
  {path: 'companies/:id', component: CompanyDetailComponent},
  {path: 'companies/:id/vacancies', component: CompanyVacanciesComponent},
  {path: 'vacancies/create', component: VacancyCreateComponent},
  {path: 'vacancies', component: VacancyListComponent},
  {path: 'vacancies/:id', component: VacancyDetailComponent},
  {path: '', redirectTo: 'companies', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
