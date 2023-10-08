import {Component, OnInit} from '@angular/core';
import {blogpostshow} from "../../Feature/PostBlog/models/postblogshow";
import {PostservicesService} from "../../Feature/PostBlog/services/postservices.service";
import {Observable} from "rxjs/internal/Observable";

@Component({
  selector: 'app-post-home',
  templateUrl: './post-home.component.html',
  styleUrls: ['./post-home.component.css']
})
export class PostHomeComponent implements  OnInit{
  constructor(private blogservic:PostservicesService) {
  }
  Bolgs$ ?:Observable<blogpostshow[]>;
  ngOnInit(): void {

    this.Bolgs$=this.blogservic.getall();
  }

}
