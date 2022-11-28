import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/core/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quiz',
  templateUrl: './view-quiz.component.html',
  styleUrls: ['./view-quiz.component.css'],
})
export class ViewQuizComponent implements OnInit {
  quizes = [
    {
      title: '',
      description: '',
      maxMarks: '',
      numberOfQuestions: '',
      active: false,
      category: {
        title: 'Java',
      },
    },
  ];

  constructor(private _quizService: QuizService) {}

  ngOnInit(): void {}

  getQuizes() {
    this._quizService.getQuizes().subscribe(
      (data: any) => {
        this.quizes = data;
      },
      (err) => {
        Swal.fire('Server Error!', 'err');
      }
    );
  }
}
