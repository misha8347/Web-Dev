import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { NewsComponent } from './news/news.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { EventsComponent } from './events/events.component';
import { EventsDetailsComponent } from './events-details/events-details.component';
import { HomeComponent } from './home/home.component';
import { ClubsComponent } from './clubs/clubs.component';
import { ClubsDetailsComponent } from './clubs-details/clubs-details.component';
import { ClubEventsComponent } from './club-events/club-events.component';
import { ClubNewsComponent } from './club-news/club-news.component';
import { LocationsComponent } from './locations/locations.component';

const routes: Routes = [
  {path: 'news', component: NewsComponent},
  {path: 'news/:id', component: NewsDetailsComponent},
  {path: 'events', component: EventsComponent},
  {path: 'events/:id', component: EventsDetailsComponent},
  {path: 'clubs', component: ClubsComponent},
  {path: 'clubs/:id', component: ClubsDetailsComponent},
  {path: 'clubs/:id/events', component: ClubEventsComponent},
  {path: 'clubs/:id/news', component: ClubNewsComponent},
  {path: 'locations', component: LocationsComponent},
  {path: '', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
