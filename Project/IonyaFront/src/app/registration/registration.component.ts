import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  isLoggedIn: boolean = false;
  username: string = '';
  password: string = '';
  repeat_password: string = '';

  email: string = '';
  first_name: string = '';
  last_name: string = '';


  constructor(private apiService: ApiService, private appComponent: AppComponent){}

  ngOnInit(){

  }

  register(){
    if(this.password == this.repeat_password){
      this.apiService.register(this.username, this.password, this.email, this.first_name, this. last_name).subscribe((data) => {
        console.log(data);
      })
    }
    else{
      alert("repeat_password is not the same as password")
    }
  }
}
