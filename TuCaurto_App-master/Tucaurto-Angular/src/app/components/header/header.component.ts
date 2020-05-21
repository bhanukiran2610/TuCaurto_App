import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthenticationService } from '../../service/authentication.service';
import { PropertyService } from 'src/app/service/property.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  // //isUserLoggedIn:boolean=false;
  // @Output() public found = new EventEmitter<any>();
  constructor(
    public basicAuth: AuthenticationService,
    private propertyService: PropertyService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  search(str: string) {
    if (sessionStorage.getItem('username') === null) {
      alert('please login to search the properties');
      this.router.navigate(['/login']);
    } else {
      this.propertyService.findByNameContaining(str).subscribe((data) => {
        console.log(data);
      });
    }
  }
}
