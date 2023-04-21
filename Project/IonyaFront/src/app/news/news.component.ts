import { Component } from '@angular/core';
import { News } from '../models';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
  news_list: News[] = []  
  constructor(private apiService: ApiService){

  }

  ngOnInit(){
    this.getNews()
  }

  getNews(){
    this.apiService.getNewsList().subscribe((data) => {
      this.news_list = data
    })
  }
}
