import { Component, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LoginComponent } from '../login/login.component';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public showLogOut:Boolean = false;
  constructor(private authserv: AuthService, private router: Router) {
    this.router.events.subscribe( x => { this.ngOnInit()})
   }

  ngOnInit() {
    if (this.authserv.isAuthenticated()) {
      this.showLogOut = true;
    }
  }

  public LogOut()
  {
    this.authserv.LogOut();
    this.showLogOut = false;
  }
}
