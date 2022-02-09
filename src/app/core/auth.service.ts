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

  loginUser(authToken: any) {
    localStorage.setItem('authToken', authToken);
    return true;
  }

  getCurrentUser(): Observable<any> {
    return this.http.get(`${this.baseUrl}/currentUser`);
  }
  isLoggedIn() {
    const authToken = localStorage.getItem('authToken');
    if (authToken == undefined || authToken == '' || authToken == null) {
      return false;
    } else {
      return true;
    }
  }

  logOut() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    return true;
  }

  getAuthToken() {
    return localStorage.getItem('authToken');
  }

  setUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUser() {
    const user = localStorage.getItem('user');
    if (user != null) {
      return JSON.parse(user);
    } else {
      this.logOut();
      return null;
    }
  }

  getUserRole() {
    const user = this.getUser();
    return user.authorities[0].authority;
  }
}
