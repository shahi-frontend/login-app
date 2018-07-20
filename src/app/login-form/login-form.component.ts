import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFOrmComponent implements OnInit {

  constructor(private router: Router, private user: UserService) { }

  ngOnInit() {
  }

  loginUser(event) {
    event.preventDefault();
    console.log(event);
    const username = event.target.elements[0].value;
    const password = event.target.elements[1].value;
    console.log(username, password);
    if (username === 'admin' && password === 'admin') {
      this.user.setUserLoggedIn();
      this.router.navigate(['dashboard']);
    }
  }

}
