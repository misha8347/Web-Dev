import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyItemComponent } from './company-item/company-item.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { VacancyListComponent } from './vacancy-list/vacancy-list.component';
import { VacancyItemComponent } from './vacancy-item/vacancy-item.component';
import { VacancyDetailComponent } from './vacancy-detail/vacancy-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { CompanyVacanciesComponent } from './company-vacancies/company-vacancies.component';
import { CompanyCreateComponent } from './company-create/company-create.component';
import { VacancyCreateComponent } from './vacancy-create/vacancy-create.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyListComponent,
    CompanyItemComponent,
    CompanyDetailComponent,
    VacancyListComponent,
    VacancyItemComponent,
    VacancyDetailComponent,
    CompanyVacanciesComponent,
    CompanyCreateComponent,
    VacancyCreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
