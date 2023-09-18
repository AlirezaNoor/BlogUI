import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterLinkActive} from '@angular/router';
import {Subscription} from 'rxjs';
import {CategoryserviecService} from '../services/categoryserviec.service';
import {categoryshow} from '../models/Categoriesshow.model';
import {CategoryupdateModels} from "../models/categoryupdate.models";

@Component({
  selector: 'app-editcategory',
  templateUrl: './editcategory.component.html',
  styleUrls: ['./editcategory.component.css']
})
export class EditcategoryComponent implements OnInit, OnDestroy {
  constructor(private route: ActivatedRoute, private serve: CategoryserviecService ,private router:Router) {
  }

  id: string | null = null;
  isforunsub?: Subscription;
  isforunsubupdate?: Subscription;

  category?: categoryshow;

  ngOnInit(): void {
    this.isforunsub = this.route.paramMap.subscribe({
      next: (params) => {
        this.id = params.get('id');
        if (this.id) {
          this.serve.getdtails(this.id).subscribe({
            next: (res) => {
              this.category = res;
            }
          })
        }
      }

    })
  }

  onsubmit():void {

    const updatecategory: CategoryupdateModels =
      {
        name: this.category?.name ?? '',
        urlhadle: this.category?.urlhadle ?? ''

      };
    console.log(updatecategory)
if (this.id){
 this.isforunsubupdate= this.serve.updatecategory(this.id,updatecategory).subscribe(
    {
      next:(res)=>{this.router.navigateByUrl('/admin/Category')},
    }
  )
}
  }

  deleteCategry(){
if (this.id){
  this.serve.deletecategoryservice(this.id).subscribe({
    next:(res)=>{this.router.navigateByUrl('/admin/Category')}
  })
}
  }
  ngOnDestroy(): void {
    this.isforunsub?.unsubscribe();
    this.isforunsubupdate?.unsubscribe();
  }

}
