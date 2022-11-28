import { Component, OnInit } from '@angular/core';

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

  constructor() {}

  ngOnInit(): void {}
}
