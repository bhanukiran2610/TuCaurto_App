import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.css'],
})
export class SignoutComponent implements OnInit {
  constructor(public router: Router, public httpClient: HttpClient) {}

  ngOnInit(): void {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('role');

    this.httpClient.get('http://localhost:8080/logout');

    setTimeout(() => {
      this.router.navigate(['home']);
    }, 2000);
  }
}
