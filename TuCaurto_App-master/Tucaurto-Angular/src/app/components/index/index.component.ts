import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../../service/property.service';
import { Property } from '../../common/Property';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  // variable for storing all the properties
  properties: Property[];

  constructor(private propertyService: PropertyService) {}

  ngOnInit(): void {
    this.getProperties();
  }

  getProperties() {
    this.propertyService.getAllProperties().subscribe((data) => {
      this.properties = data;
      console.log(data);
    });
  }

  getFilterProperties(city: string, price: number, type: number) {
    if (city === 'none' || price === 0 || type === -1) {
      this.getProperties();
    } else {
      this.propertyService
        .getFilteredProperties(city, price, type)
        .subscribe((data) => {
          this.properties = data;
          console.log(data);
        });
      console.log(city, price, type);
    }
  }
}
