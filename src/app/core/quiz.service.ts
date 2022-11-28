import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  baseUrl = environment.baseUrl;
  constructor(private _http: HttpClient) {}

  public getQuizes() {
    return this._http.get(`${this.baseUrl}/quiz/all`);
  }
}
