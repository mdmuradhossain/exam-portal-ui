import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css'],
})
export class ViewCategoryComponent implements OnInit {
  categories = [
    {
      id: 23,
      title: 'Java',
      description: 'Pr',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
