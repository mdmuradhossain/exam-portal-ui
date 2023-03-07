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

  public addQuiz(quiz: any) {
    return this._http.post(`${this.baseUrl}/quiz/add`, quiz);
  }

  public deleteQuiz(id: any) {
    return this._http.delete(`${this.baseUrl}/quiz/${id}`);
  }

  public getQuiz(id: any) {
    return this._http.get(`${this.baseUrl}/quiz/${id}`);
  }

  public updateQuiz(quiz: any) {
    return this._http.put(`${this.baseUrl}/quiz/edit`, quiz);
  }
}
