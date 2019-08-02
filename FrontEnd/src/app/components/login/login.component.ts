import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  pass:String;
  user:String;

  constructor(public loginServ:LoginService, public router: Router) { }

  ngOnInit() {
  }

  public logear()
  {
    let user = {user: this.user, pass: this.pass};
    this.loginServ.signin(user).then(data => {
      if (data.token) {
        localStorage.setItem('token',data.token);
        this.router.navigate(['/home']);
      }
    })
    .catch(err => {
      console.log(err);
    })
  }

  fillCredentials()
  {
    this.user = "admin";
    this.pass = "1234";
  }
}
