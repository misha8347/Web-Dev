import { Component, OnInit } from '@angular/core';
import { Album } from '../models';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit{
  albums: Album[] = [];

  constructor(private albumService: AlbumService){
  }

  ngOnInit(): void{
    if(!this.albumService.isFetched){
      this.albumService.getAlbums().subscribe((albums) => {
        this.albums = albums;
        this.albumService.albumsAvailable = albums;
        this.albumService.isFetched = true;
      })
      console.log('ngOnInit initialized');
    }
    else{
      this.albums = this.albumService.albumsAvailable;
    }
  }

  getAlbums(): Album[]{
    return this.albums.filter((album) => !album.isDeleted);
  }

  removeAlbum(id: number){
    this.albums = this.albums.filter(item => item.id !== id);
    this.albumService.albumsAvailable = this.albumService.albumsAvailable.filter(item => item.id !== id);
  }
}
