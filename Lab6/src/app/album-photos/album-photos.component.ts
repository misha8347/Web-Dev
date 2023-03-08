import { Component, OnInit } from '@angular/core';
import { Photo, Album } from '../models';
import { AlbumService } from '../album.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit{
  albumId: number;
  photos: Photo[];

  constructor(private albumService: AlbumService, private route: ActivatedRoute, private router: Router){
    this.photos = [];
    this.albumId = Number(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.albumService.getPhotos(this.albumId).subscribe((photos) => {
      this.photos = photos;
    })
  }
}
