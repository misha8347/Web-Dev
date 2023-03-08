import { Component, OnInit } from '@angular/core';
import { Album } from '../models';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from '../album.service';


@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit{
  album: Album;

  constructor(private route: ActivatedRoute, private albumService: AlbumService){
    this.album = {} as Album;
  }

  ngOnInit(): void {
      this.route.paramMap.subscribe((params) => {
        let _id = params.get('id');
        if(_id){
          let id = +_id;
          this.album = this.albumService.getAlbum(id);
        }
      })
  }

  
  inputValue: any;
  changeTitle(){
    console.log(this.inputValue);
    this.album.title = this.inputValue;
  }
}
