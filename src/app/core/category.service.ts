import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  baseUrl: string = 'http://localhost:8080/category';

  constructor(private http: HttpClient) {}

  public categories() {
    return this.http.get(`${this.baseUrl}/all`);
  }

  public addCategory() {}
}
