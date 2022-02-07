import { Component, OnInit } from '@angular/core';
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
  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.user.username == '' || this.user.username == null) {
      alert('Username is required');
      return;
    } else {
      this.userService.addUser(this.user).subscribe(
        (data: any) => {
          console.log(data);
          alert('success');
        },
        (err: Error) => {
          console.log(err);
        }
      );
    }
    console.log(this.user);
  }
}
