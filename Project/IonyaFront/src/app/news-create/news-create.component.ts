import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { Club } from '../models';

@Component({
  selector: 'app-news-create',
  templateUrl: './news-create.component.html',
  styleUrls: ['./news-create.component.css']
})
export class NewsCreateComponent {
  clubs: Club[] = [];
  title: string = '';
  text: string = '';
  image: string = '';
  selectedClub: Club = {} as Club;
  constructor(private apiService: ApiService, private router: Router){}

  ngOnInit(){
    this.getClubs()
    this.selectedClub = this.clubs[0];
  }

  createNews() {
    if (this.title && this.text && this.selectedClub) {
      console.log(this.title, this.text, this.image, this.selectedClub.id);
      this.apiService.createNewsElem(this.title, this.text, this.image, this.selectedClub.id)
        .subscribe(
          (news) => {
            console.log('News created successfully', news);
            alert('News created successfully!');
            this.router.navigate(['/news-list']);
          },
          (error) => {
            console.error('Error creating news', error);
            alert('Error creating news. Please try again.');
          }
        );
    } else {
      alert('Please fill in all fields to create news');
    }
  }

  getClubs(){
    this.apiService.getClubList().subscribe((data) => {
      this.clubs = data;
    })
  }

}
