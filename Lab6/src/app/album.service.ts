import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from './models';
import { Photo } from './models';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  isFetched: boolean = false;
  albumsAvailable: Album[] = [];
  constructor( private client: HttpClient) { }

  getAlbums(): Observable<Album[]>{
    console.log('Albums taken');
    return this.client.get<Album[]>('https://jsonplaceholder.typicode.com/albums');
  }

  getAlbum(id: number): Album{
    console.log(`Album ${id} taken`);
    var currentAlbum = this.albumsAvailable.find(item => item.id === id);
    if(currentAlbum)
      return currentAlbum;
    return {} as Album;
  }

  getPhotos(id: number): Observable<Photo[]>{
    console.log('Photos taken');
    return this.client.get<Photo[]>(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
  }
}
