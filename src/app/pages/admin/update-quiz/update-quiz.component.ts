import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/core/quiz.service';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css'],
})
export class UpdateQuizComponent implements OnInit {
  quizId: any;
  quiz: any;

  constructor(
    private _route: ActivatedRoute,
    private _quizService: QuizService
  ) {}

  ngOnInit(): void {
    this.quizId = this._route.snapshot.params['id'];
    // alert(this.quizId);
    this.getQuiz(this.quizId);
  }

  public getQuiz(id: any) {
    this._quizService.getQuiz(id).subscribe(
      (data) => {
        this.quiz = data;
        console.log(data);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  public updateQuiz(id: any) {}
}
