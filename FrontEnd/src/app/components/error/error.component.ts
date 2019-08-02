import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  public routerAuth:Boolean = false;
  public routerHome:Boolean = false;

  constructor(public authserv: AuthService) { }

  ngOnInit() {
    if (this.authserv.isAuthenticated()) {
      this.routerHome = true;
      this.routerAuth = false;
    }
    else
    {
      this.routerAuth = true;
      this.routerHome = false;
    }
  }

}
