import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  // isLoggedIn = false;
  users = {
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
  };

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.users = this.getUser();
    // this.isLoggedIn = this.authService.isLoggedIn();
  }

  public getUser() {
    return this.authService.getUser();
  }
  logOut() {
    this.authService.logOut();
    // window.location.reload();
    this.router.navigate(['']);
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }
}
