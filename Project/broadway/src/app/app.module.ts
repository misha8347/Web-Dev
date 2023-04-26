import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BroadwayNewsComponent } from './broadway-news/broadway-news.component';
import { HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { BroadwayNewsDetailsComponent } from './broadway-news-details/broadway-news-details.component';
import { BroadwayNewsItemComponent } from './broadway-news-item/broadway-news-item.component';
import { BroadwayNewsCreateComponent } from './broadway-news-create/broadway-news-create.component';
import { EventsComponent } from './events/events.component';
import { EventsItemComponent } from './events-item/events-item.component';
import { EventsCreateComponent } from './events-create/events-create.component';
import { EventsDetailsComponent } from './events-details/events-details.component'
import {AuthInterceptor} from "./AuthInterceptor";
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    BroadwayNewsComponent,
    BroadwayNewsDetailsComponent,
    BroadwayNewsItemComponent,
    BroadwayNewsCreateComponent,
    EventsComponent,
    EventsItemComponent,
    EventsCreateComponent,
    EventsDetailsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
