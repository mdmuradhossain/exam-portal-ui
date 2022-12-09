import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/core/category.service';

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
  constructor(private _categoryService: CategoryService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this._categoryService.getCategories().subscribe((data: any) => {
      this.categories = data;
    });
  }
}
