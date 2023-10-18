import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CategoryListComponent} from './Feature/Category/category-list/category-list.component';
import {CategoryAddComponent} from './Feature/Category/category-add/category-add.component';
import {EditcategoryComponent} from './Feature/Category/editcategory/editcategory.component';
import {PostbloglistComponent} from "./Feature/PostBlog/postbloglist/postbloglist/postbloglist.component";
import {PostbolgaddComponent} from "./Feature/PostBlog/postblogadd/postbolgadd/postbolgadd.component";
import {PostdtailsComponent} from "./Feature/PostBlog/postdtails/postdtails.component";
import {PostHomeComponent} from "./Public/post-home/post-home.component";
import {PostshowdtailsComponent} from "./Public/postshowdtails/postshowdtails.component";
import {LoginComponent} from "./Feature/auth/login/login.component";

const routes: Routes = [
  {
    path:'blog/:url',
    component:PostshowdtailsComponent

  },
  {
    path:'',
    component:PostHomeComponent
  },
  {
    path: "admin/Category",
    component: CategoryListComponent
  },
  {
    path: "admin/category/add",
    component: CategoryAddComponent
  },
  {
    path: 'admin/Category/:id',
    component: EditcategoryComponent
  },
  {
    path: 'admin/Post',
    component: PostbloglistComponent
  },
  {
    path: 'admin/post/add',
    component: PostbolgaddComponent
  },
  {
    path: 'admin/post/:id',
    component: PostdtailsComponent
  },
  {
    path:'login',
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
