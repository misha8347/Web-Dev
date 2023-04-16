import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ApiService } from '../api.service';
import { News } from '../models';

@Component({
  selector: 'app-broadway-news',
  templateUrl: './broadway-news.component.html',
  styleUrls: ['./broadway-news.component.css']
})
export class BroadwayNewsComponent {

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

  postNews(title: string, text: string, image: string){
    this.apiService.createNewsElem(title, text, image).subscribe((data) => {
      this.news_list.push(data)
    })
  }

  deleteNews(news_id: number){
    this.apiService.deleteNewsElem(news_id).subscribe((data) => {
      this.news_list = this.news_list.filter((news) => news.id != news_id)
    })
  }
}
