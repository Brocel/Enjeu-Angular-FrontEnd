import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'enjeu-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  isAuth: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
