import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Core/Components/navbar/navbar.component';
import { CategoryListComponent } from './Feature/Category/category-list/category-list.component';
import { CategoryAddComponent } from './Feature/Category/category-add/category-add.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EditcategoryComponent } from './Feature/Category/editcategory/editcategory.component';
import { PostbloglistComponent } from './Feature/PostBlog/postbloglist/postbloglist/postbloglist.component';
import { PostbolgaddComponent } from './Feature/PostBlog/postblogadd/postbolgadd/postbolgadd.component';
import { PostdtailsComponent } from './Feature/PostBlog/postdtails/postdtails.component'
import { MarkdownModule } from 'ngx-markdown';
import { ImageSelectorComponent } from './Shared/Components/image-selector/image-selector.component';
import { PostHomeComponent } from './Public/post-home/post-home.component';
import { PostshowdtailsComponent } from './Public/postshowdtails/postshowdtails.component';
import { LoginComponent } from './Feature/auth/login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CategoryListComponent,
    CategoryAddComponent,
    EditcategoryComponent,
    PostbloglistComponent,
    PostbolgaddComponent,
    PostdtailsComponent,
    ImageSelectorComponent,
    PostHomeComponent,
    PostshowdtailsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MarkdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
