import {Component, OnDestroy} from '@angular/core';
import {addpost} from "../../models/Blogpost.requst";
import {PostservicesService} from "../../services/postservices.service";
import {Router} from "@angular/router";
import {Subscription} from "rxjs/internal/Subscription";

@Component({
  selector: 'app-postbolgadd',
  templateUrl: './postbolgadd.component.html',
  styleUrls: ['./postbolgadd.component.css']
})
export class PostbolgaddComponent  implements  OnDestroy{
  postblog: addpost;
  unsubscription?:Subscription;
  constructor(private sevice: PostservicesService, private router: Router) {
    this.postblog = {
      title: '',
      urlhandler: '',
      Author: '',
      cotent: '',
      img: '',
      date: new Date(),
      shorttitle: '',
      isvisible: true,

    }
  }

  sendpost(): void {
this.unsubscription=this.sevice.addpostblog(this.postblog).subscribe(
      {
        next:(res)=>{this.router.navigateByUrl('/admin/Post')}
      }
    )
  }

  ngOnDestroy(): void {

    this.unsubscription?.unsubscribe();
  }

}
