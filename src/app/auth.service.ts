import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggone = false;

  constructor() { }
  isLogged() {
    console.log(this.loggone) ;
  }
  logout() {
    console.log('out2');
    this.loggone = false;
  }
  login() {
    this.loggone = true;
    console.log('ciaone');
  }
}
var loggone = false;

