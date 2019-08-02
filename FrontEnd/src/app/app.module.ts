import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksHomeComponent } from './components/books-home/books-home.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { HttpService } from './services/http.service';
import { AuthService } from './services/auth.service';
import { AuthWardService } from './services/auth-ward.service';
import { JWTInterceptor} from '../app/services/Interceptor/JWTInterceptor';
import { SinlogearService } from './services/sinlogear.service';
import { ErrorComponent } from './components/error/error.component';
@NgModule({
  declarations: [
    AppComponent,
    BooksHomeComponent,
    NavbarComponent,
    LoginComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ HttpService,AuthService,AuthWardService,    {
    provide : HTTP_INTERCEPTORS,
    useClass: JWTInterceptor,
    multi : true},SinlogearService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
