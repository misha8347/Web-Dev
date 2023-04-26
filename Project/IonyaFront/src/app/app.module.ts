import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {  HTTP_INTERCEPTORS,HttpClientModule } from '@angular/common/http';
// import { AuthInterceptor} from "./AuthInterceptor";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './home/home.component';
import {Router, ActivatedRoute, ParamMap} from "@angular/router";
import { EventsComponent } from './events/events.component';
import { NewsComponent } from './news/news.component';
import { ClubsComponent } from './clubs/clubs.component';
import { MatDialogModule} from "@angular/material/dialog";
import { EventsDetailsComponent } from './events-details/events-details.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { TicketsComponent } from './tickets/tickets.component';
import { FormsModule } from '@angular/forms';
import { ClubsDetailsComponent } from './clubs-details/clubs-details.component';
import { ClubEventsComponent } from './club-events/club-events.component';
import { ClubNewsComponent } from './club-news/club-news.component';
import { LocationsComponent } from './locations/locations.component';
import { LocationsDetailsComponent } from './locations-details/locations-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    EventsComponent,
    NewsComponent,
    ClubsComponent,
    EventsDetailsComponent,
    NewsDetailsComponent,
    TicketsComponent,
    ClubsDetailsComponent,
    ClubEventsComponent,
    ClubNewsComponent,
    LocationsComponent,
    LocationsDetailsComponent,
    // LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    MatDialogModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: AuthInterceptor,
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
