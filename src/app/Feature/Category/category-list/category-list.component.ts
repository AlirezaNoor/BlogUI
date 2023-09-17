import { Component, OnInit } from '@angular/core';
import { categoryshow } from '../models/Categoriesshow.model';
import { CategoryserviecService } from '../services/categoryserviec.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  constructor(private _categgoryserviec:CategoryserviecService){}
  categories?:categoryshow[]
  ngOnInit(): void {
this._categgoryserviec.getallcategories().subscribe({
next: (res)=>{this.categories=res;
console.log(res)

},
error:(ero)=>{console.log(`${ero} this is error`)}
});

  }

}
