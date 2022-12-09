import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/core/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css'],
})
export class ViewCategoryComponent implements OnInit {
  categories = [
    {
      title: '',
      description: '',
    },
  ];

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(
      (data: any) => {
        this.categories = data;
        console.log(data);
      },
      (err) => {
        throw new Error();
        Swal.fire('Error !!');
        // console.log(err);
      }
    );
  }
}
