import { Component } from '@angular/core';
import { News } from '../models';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-broadway-news-details',
  templateUrl: './broadway-news-details.component.html',
  styleUrls: ['./broadway-news-details.component.css']
})
export class BroadwayNewsDetailsComponent {
  news: News | undefined;

  constructor(private route: ActivatedRoute, private apiService: ApiService){

  }

  ngOnInit(){
    const routeParams = this.route.snapshot.paramMap;
    const newsIdFromRoute = Number(routeParams.get('id'));

    this.apiService.getNewsElement(newsIdFromRoute).subscribe((data) => {
      this.news = data;
    })
  }

  deleteNews(){
    if(this.news){
        this.apiService.deleteNewsElem(this.news.id).subscribe(response => {
          console.log(response)
        })
    }
  }
}
