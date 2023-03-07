import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/core/category.service';
import { QuizService } from 'src/app/core/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css'],
})
export class UpdateQuizComponent implements OnInit {
  quizId: any;
  quiz: any;
  categories: any;

  constructor(
    private _route: ActivatedRoute,
    private _quizService: QuizService,
    private _categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.quizId = this._route.snapshot.params['id'];
    // alert(this.quizId);
    this.getQuiz(this.quizId);
    this.getCategories();
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

  public updateQuiz(id: any) {
    this._quizService.updateQuiz(this.quiz).subscribe(
      (data) => {
        Swal.fire('Updated');
      },
      (error) => [Swal.fire('Error', 'error in updating', 'error')]
    );
    alert('update' + id);
  }

  public getCategories() {
    this._categoryService.getCategories().subscribe((data: any) => {
      this.categories = data;
    });
  }
}
