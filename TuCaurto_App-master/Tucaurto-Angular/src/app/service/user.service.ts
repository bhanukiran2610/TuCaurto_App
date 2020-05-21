import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../common/User';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  profileUrl = 'http://localhost:8002/myprofile';

  mypropertiesUrl = 'http://localhost:8002/myproperties';

  constructor(private httpClient: HttpClient) {}

  updateProfile(email: string, value: any): Observable<Object> {
    return this.httpClient.put(`${this.profileUrl}/${email}`, value);
  }

  getProfile(email: string): Observable<User> {
    return this.httpClient.get<User>(`${this.profileUrl}/${email}`);
  }

  getMyProperties(email: string): Observable<any> {
    return this.httpClient.get(`${this.mypropertiesUrl}/${email}`);
  }

  deleteProperty(id: number, email: string): Observable<any> {
    return this.httpClient.delete(`${this.mypropertiesUrl}/${email}/${id}`);
  }
}
