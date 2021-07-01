import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '@core/services/authentication.service';

@Component({
  selector: 'enjeu-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  isAuth: boolean = false;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.isAuth = this.authenticationService.isUserLoggedIn();
  }

  onSignOut() {
    this.authenticationService.logout();
    this.isAuth = false;
  }
}
