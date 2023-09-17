import { Component, OnDestroy } from '@angular/core';
import { categorymodels } from '../models/Categories-add-request.models';
import { CategoryserviecService } from '../services/categoryserviec.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnDestroy {

  model:categorymodels
  constructor( private createcategory : CategoryserviecService, private router:Router){
    this.model={
      name:'',
      urlhadle:''
    }
  }
 private unsubscribtio? :Subscription
  submitcategories(){
   this.unsubscribtio= this.createcategory.addcategory(this.model).subscribe({
      next:(res)=>{this .router.navigateByUrl('/admin/Category') },
      error:(res)=>{console.log('somthing was wrong')}

    });
  }
  ngOnDestroy(): void {
 this.unsubscribtio?.unsubscribe();
  }
}
