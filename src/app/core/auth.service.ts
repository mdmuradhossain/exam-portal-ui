import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) {}

  generateToken(loginData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/generateToken`, loginData);
  }
}
