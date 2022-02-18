import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  users = {
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
  };
  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.users = this.getUser();
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
