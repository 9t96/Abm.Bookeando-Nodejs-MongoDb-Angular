import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BooksHomeComponent} from './components/books-home/books-home.component';
import {AuthWardService} from '../app/services/auth-ward.service';
import {SinlogearService} from '../app/services/sinlogear.service';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [  
{ path: '', redirectTo: 'auth', pathMatch: 'full'},
{ path: '*', redirectTo: 'error'},
{ path: 'home', component: BooksHomeComponent, canActivate:[AuthWardService]},
{ path: 'auth', component: LoginComponent, canActivate:[SinlogearService]},
{ path: 'error', component: ErrorComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 