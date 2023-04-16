import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
import { News } from '../models';

@Component({
  selector: 'app-broadway-news-create',
  templateUrl: './broadway-news-create.component.html',
  styleUrls: ['./broadway-news-create.component.css']
})
export class BroadwayNewsCreateComponent {
  news: News | undefined;

  constructor(private apiService: ApiService, private route: ActivatedRoute){
    this.news = {} as News;
  }

  newsTitle: any;
  newsText: any;
  newsImage: any;
  postNews(){
    this.apiService.createNewsElem(this.newsTitle, this.newsText, this.newsImage).subscribe(response => {
      console.log(response)
    })
  }

}
