import { Component, OnInit } from '@angular/core';
import { Property } from 'src/app/common/Property';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-myproperties',
  templateUrl: './myproperties.component.html',
  styleUrls: ['./myproperties.component.css'],
})
export class MypropertiesComponent implements OnInit {
  properties: Property[];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getMyProperties();
  }

  getMyProperties() {
    return this.userService
      .getMyProperties(sessionStorage.getItem('username'))
      .subscribe((data) => {
        this.properties = data;
      });
  }
  deleteProperty(id: number) {
    return this.userService
      .deleteProperty(id, sessionStorage.getItem('username'))
      .subscribe((data) => {
        console.log(data);
        this.ngOnInit();
      });
  }
}
