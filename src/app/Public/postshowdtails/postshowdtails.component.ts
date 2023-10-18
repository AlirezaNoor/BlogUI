import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs/internal/Observable";
import {blogpostshow} from "../../Feature/PostBlog/models/postblogshow";
import {PostservicesService} from "../../Feature/PostBlog/services/postservices.service";
@Component({
  selector: 'app-postshowdtails',
  templateUrl: './postshowdtails.component.html',
  styleUrls: ['./postshowdtails.component.css']
})
export class PostshowdtailsComponent implements  OnInit{
  constructor(private  route:ActivatedRoute ,  private postservice:PostservicesService) {
  }
  url:string |null=null;
  Blogdtials$ ?:Observable<blogpostshow>
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(res)=>{ this.url=res.get('url')
        if (this.url!=null){
          this.Blogdtials$=this.postservice.getbyurl(this.url);
        }
      }
    })



  }

}

