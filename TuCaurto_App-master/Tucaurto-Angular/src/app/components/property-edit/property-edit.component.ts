import { Component, OnInit } from '@angular/core';
import { Property } from 'src/app/common/Property';
import { PropertyService } from 'src/app/service/property.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-edit',
  templateUrl: './property-edit.component.html',
  styleUrls: ['./property-edit.component.css'],
})
export class PropertyEditComponent implements OnInit {
  property: Property;
  id: number;
  constructor(
    private propertyService: PropertyService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.property = new Property();
    this.propertyService.getSelectedProperty(this.id).subscribe(
      (data) => {
        console.log(data);
        this.property = data;
      },
      (error) => console.log(error)
    );
  }

  onSubmit(type: number) {
    this.propertyService
      .updateProperty(this.id, type, this.property)
      .subscribe((data) => {
        console.log(data);
        alert('Successfully updated');
        this.gotoList();
      });
  }

  gotoList() {
    this.router.navigate(['/myproperties']);
  }
}
