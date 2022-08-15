import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  user = null;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.user = this.authService.getUser();
  }
}
