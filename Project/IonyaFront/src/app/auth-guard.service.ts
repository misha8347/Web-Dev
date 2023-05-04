import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private apiService: ApiService, private router: Router) { }

  canActivate(): boolean{
    if (!this.apiService.isLoggedIn){
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
