import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  hide = true;
  loginData = {
    username: '',
    password: '',
  };

  constructor(
    private snackBar: MatSnackBar,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    if (
      this.loginData.username.trim() == '' ||
      this.loginData.username == null
    ) {
      this.snackBar.open('Enter valid username', 'X', { duration: 3000 });
      return;
    } else if (
      this.loginData.password.trim() == '' ||
      this.loginData.password == null
    ) {
      this.snackBar.open('Password is required', 'X', { duration: 3000 });
      return;
    } else {
      this.authService.generateToken(this.loginData).subscribe(
        (data: any) => {
          this.authService.loginUser(data.authenticationToken);

          this.authService.getCurrentUser().subscribe((user: any) => {
            this.authService.setUser(user);
            console.log(user);
            if (this.authService.getUserRole() == 'ROLE_ADMIN') {
              this.router.navigate(['admin']);
            } else if (this.authService.getUserRole() == 'ROLE_USER') {
              this.router.navigate(['user']);
            } else {
              this.authService.logOut();
              this.router.navigate(['']);
            }
          });
        },
        (err) => {
          console.log(err);
          this.snackBar.open('Invalid username/password', 'Ok', {
            duration: 3000,
          });
        }
      );
    }
  }
}
