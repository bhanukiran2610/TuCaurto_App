import { Component, OnInit } from '@angular/core';
import { PropertyService } from 'src/app/service/property.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Property } from 'src/app/common/Property';

@Component({
  selector: 'app-property-view',
  templateUrl: './property-view.component.html',
  styleUrls: ['./property-view.component.css'],
})
export class PropertyViewComponent implements OnInit {
  property: Property;
  id: number;
  constructor(
    private propertyService: PropertyService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getProperty();
  }

  getProperty() {
    this.property = new Property();
    this.id = this.route.snapshot.params['id'];
    this.propertyService.getSelectedProperty(this.id).subscribe((data) => {
      this.property = data;
    });
  }

  list() {
    this.router.navigate(['/index']);
  }
}
