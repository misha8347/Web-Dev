import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BroadwayNewsComponent } from './broadway-news/broadway-news.component';
import { BroadwayNewsDetailsComponent } from './broadway-news-details/broadway-news-details.component';
import { BroadwayNewsCreateComponent } from './broadway-news-create/broadway-news-create.component';
import { EventsComponent } from './events/events.component';
import { EventsCreateComponent } from './events-create/events-create.component';
import { EventsDetailsComponent } from './events-details/events-details.component';

const routes: Routes = [
  {path: 'news', component: BroadwayNewsComponent},
  {path: 'news/create', component: BroadwayNewsCreateComponent},
  {path: 'news/:id', component: BroadwayNewsDetailsComponent},
  {path: 'events', component: EventsComponent},
  {path: 'events/create', component: EventsCreateComponent},
  {path: 'events/:id', component: EventsDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
