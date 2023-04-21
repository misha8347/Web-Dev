import { Component } from '@angular/core';
import { LoginComponent} from "../login/login.component";
import { MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private LoginPage: MatDialog) {
  }


  loginFunction(){
    this.openDialog()
  }


  openDialog(){
    this.LoginPage.open(LoginComponent,{
      width: '30%',



    });
  }
 }
