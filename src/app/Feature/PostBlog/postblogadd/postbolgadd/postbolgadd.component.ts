import {Component, OnDestroy, OnInit} from '@angular/core';
import {addpost} from "../../models/Blogpost.requst";
import {PostservicesService} from "../../services/postservices.service";
import {Router} from "@angular/router";
import {Subscription} from "rxjs/internal/Subscription";
 import {categoryshow} from "../../../Category/models/Categoriesshow.model";
import {CategoryserviecService} from "../../../Category/services/categoryserviec.service";
import {Observable} from "rxjs/internal/Observable";

@Component({
  selector: 'app-postbolgadd',
  templateUrl: './postbolgadd.component.html',
  styleUrls: ['./postbolgadd.component.css']
})
export class PostbolgaddComponent implements OnDestroy,OnInit {
  postblog: addpost;
  unsubscription?: Subscription;
category$ ?:Observable<categoryshow[]>
  constructor(private sevice: PostservicesService, private router: Router, private categoryservices:CategoryserviecService) {
    this.postblog = {
      title: '',
      urlhandler: '',
      Author: '',
      cotent: '',
      img: '',
      date: new Date(),
      shorttitle: '',
      isvisible: true,
      category: [],
    }
  }
  ngOnInit(): void {
  this.category$=this.categoryservices.getallcategories();
  }
  sendpost(): void {
    this.unsubscription = this.sevice.addpostblog(this.postblog).subscribe(
      {
        next: (res) => {
          this.router.navigateByUrl('/admin/Post')
        }
      }
    )
  }
  ngOnDestroy(): void {

    this.unsubscription?.unsubscribe();
  }




}
