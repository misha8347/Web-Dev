import { Component, Input, Output, OnInit } from '@angular/core';
import {News} from '../models'

@Component({
  selector: 'app-broadway-news-item',
  templateUrl: './broadway-news-item.component.html',
  styleUrls: ['./broadway-news-item.component.css']
})
export class BroadwayNewsItemComponent {
  @Input() news!: News;

  

}
