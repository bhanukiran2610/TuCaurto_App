import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Property } from '../common/Property';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PropertyService {
  private baseUrl = 'http://localhost:8002/properties';
  user = sessionStorage.getItem('username');

  constructor(private httpClient: HttpClient) {}

  getAllProperties(): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl).pipe(retry(5));
  }

  getFilteredProperties(
    city: string,
    price: number,
    type: number
  ): Observable<any> {
    return this.httpClient
      .get<any>(
        `${this.baseUrl}/filter?city=${city}&price=${price}&typeID=${type}`
      )
      .pipe(retry(5));
  }

  getSelectedProperty(id: number): Observable<Property> {
    return this.httpClient
      .get<Property>(`${this.baseUrl}/${id}`)
      .pipe(retry(5));
  }

  //post a property
  postproperty(Property: Object, type: number) {
    return this.httpClient.post(
      `${this.baseUrl}/${this.user}/${type}`,
      Property
    );
  }

  //update Property
  updateProperty(propertyID: number, type: number, value: any) {
    return this.httpClient.put(
      `${this.baseUrl}/${this.user}/${propertyID}/${type}`,
      value
    );
  }

  //find by name containing
  findByNameContaining(str: string) {
    return this.httpClient.get(
      `http://localhost:8002/searchproperties?str=${str}`
    );
  }
}
