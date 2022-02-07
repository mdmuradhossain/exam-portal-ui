import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) {}

  public addUser(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/users`, user);
  }
}
