import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'broadway';

  logged: boolean = false;
  username: string = '';
  password: string = '';

  constructor(private apiService: ApiService){}

  login() {
    this.apiService.login(this.username, this.password).subscribe((data) => {
      localStorage.setItem('token', data.token);
      this.logged = true;
      this.username = '';
      this.password = '';
    });
  }

  logout() {
    localStorage.removeItem('token');
    // Request to the Django
    this.logged = false;
  }
}
