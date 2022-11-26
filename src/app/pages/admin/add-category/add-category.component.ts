import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/core/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css'],
})
export class AddCategoryComponent implements OnInit {
  category = {
    title: '',
    description: '',
  };

  constructor(
    private categoryService: CategoryService,
    private _snack: MatSnackBar
  ) {}

  ngOnInit(): void {}

  categoryFormSubmit() {
    if (this.category.title.trim() == '' || this.category.title == null) {
      this._snack.open('Title is required!!', '', {
        duration: 3000,
      });
      return;
    }
    this.categoryService.addCategory(this.category).subscribe(
      (data: any) => {
        Swal.fire('Success', 'Category Added.');
      },
      (error) => {
        Swal.fire('Error!!', 'Server error!!', 'error');
      }
    );
  }
}
