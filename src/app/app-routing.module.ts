import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './Feature/Category/category-list/category-list.component';
import { CategoryAddComponent } from './Feature/Category/category-add/category-add.component';

const routes: Routes = [
  {
    path:"admin/Category",
    component:CategoryListComponent
  },
  {
    path:"admin/category/add",
    component:CategoryAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
