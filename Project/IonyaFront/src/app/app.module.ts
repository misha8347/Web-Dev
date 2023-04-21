import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './home/home.component';
import {Router, ActivatedRoute, ParamMap} from "@angular/router";
import { ServiceService} from "./service.service";
import { ShowsComponent } from './shows/shows.component';
import { NewsComponent } from './news/news.component';
import { ClubsComponent } from './clubs/clubs.component';
import { LoginComponent } from './login/login.component';
import { MatDialogModule} from "@angular/material/dialog";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: LoginComponent}


    // Wildcard route for a 404 page
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ShowsComponent,
    NewsComponent,
    ClubsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(routes),
    MatDialogModule,
    HttpClientModule,
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
