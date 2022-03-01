import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';



@Component({
  selector: 'app-navbar',
  template: `
    <nav class="navbar navbar-expand navbar-light bg-light">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a class="navbar-brand" href="#">Hidden brand</a>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                [routerLink]="['/']"
                routerLinkActive="active"
                [routerLinkActiveOptions]="{ exact: true }"
                >Home</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                [routerLink]="['/active-posts']"
                routerLinkActive="active"
                >Posts attivi</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                [routerLink]="['/inactive-posts']"
                routerLinkActive="active"
                >Posts non attivi</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                [routerLink]="['/users']"
                routerLinkActive="active"
                >Users</a
              >
            </li>

          </ul>

<div>
  <button (click)="login()">LOGIN</button>
  <button (click)="logout()">logout</button>
  <button (click)="check()">loggone</button>
</div>

        </div>
      </div>
    </nav>
  `,
  styles: [],
})
export class NavbarComponent implements OnInit {
  constructor(private AuthGuard: AuthService) { }

  ngOnInit(): void { }
  login() {
    console.log('log1');

    this.AuthGuard.login();
  }
  logout() {
    console.log('out1');
    this.AuthGuard.logout();
  }
check(){
  this.AuthGuard.isLogged();
}


}

