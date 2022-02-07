import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  hide = true;
  user = {
    username: '',
    email: '',
    password: '',
    firstname: '',
    lastname: '',
    phone: '',
  };
  constructor(
    private userService: UserService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.user.username == '' || this.user.username == null) {
      // alert('Username is required');
      this.snackBar.open('Username is required', 'X', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right',
      });
      return;
    } else {
      this.userService.addUser(this.user).subscribe(
        (data: any) => {
          console.log(data);
          // alert('success');
          this.snackBar.open('Registration Successfull!', 'ok', {
            duration: 3000,
          });
        },
        (err: Error) => {
          console.log(err);
          this.snackBar.open('Something went wrong', 'X', {
            duration: 3000,
          });
        }
      );
    }
    console.log(this.user);
  }
}
