import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/core/category.service';

import { QuizService } from 'src/app/core/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css'],
})
export class AddQuizComponent implements OnInit {
  categories = [
    {
      id: '',
      title: '',
    },
  ];

  quizData = {
    title: '',
    description: '',
    maxMarks: '',
    numberOfQuestions: '',
    active: true,
    category: {
      id: '',
    },
  };
  constructor(
    private _categoryService: CategoryService,
    private _quizService: QuizService,
    private _snack: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getCategories();
    this.addQuiz();
  }

  getCategories(): void {
    this._categoryService.getCategories().subscribe((data: any) => {
      this.categories = data;
    });
  }

  addQuiz() {
    if (this.quizData.title.trim() == '' || this.quizData.title == null) {
      this._snack.open('TItle Required', '', {
        duration: 3000,
      });
      return;
    }
    // this._quizService.addQuiz(this.quizData).subscribe((data: any) => {
    //   Swal.fire('Success', 'Quiz Added');
    // });
    // throw new Error('Method not implemented.');
  }
}
