import { Component, OnInit } from '@angular/core';

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
  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.user.username == null || this.user.username == '') {
      alert('Username is required');
      return;
    }
    console.log(this.user);
  }
}
