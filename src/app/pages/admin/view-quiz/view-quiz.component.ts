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
      id: '',
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

  ngOnInit(): void {
    this.getQuizes();
  }

  getQuizes(): void {
    this._quizService.getQuizes().subscribe(
      (data: any) => {
        this.quizes = data;
        console.log('quiz:' + data);
      },
      (err) => {
        Swal.fire('Server Error!', 'err');
      }
    );
  }

  deleteQuiz(id: any) {
    this._quizService.deleteQuiz(id).subscribe(
      () => {
        console.log('Quiz Deleted....');
      },
      (err) => {
        Swal.fire('Operation Unsuccessfull', 'err');
      }
    );
  }
}
