import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  registerMode = false;
  isLoggedIn = false;

  constructor(private http: HttpClient, private authService: AuthService) { }

  ngOnInit() {
    this.isLoggedIn = this.authService.loggedIn();
  }

  logout() {
    this.isLoggedIn = false;
    this.authService.logout();
  }

  registerToggle() {
    this.registerMode = true;
  }

  cancelRegisterMode(registerMode: boolean) {
    this.registerMode = registerMode;
  }

}
