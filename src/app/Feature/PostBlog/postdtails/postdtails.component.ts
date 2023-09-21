import {Component, OnDestroy, OnInit} from '@angular/core';
import {PostservicesService} from "../services/postservices.service";
import {ActivatedRoute, Router, RouterLink, RouterLinkActive} from "@angular/router";
import {updatepost} from "../models/updatepost";
import {blogpostshow} from "../models/postblogshow";
import {Subscription} from "rxjs/internal/Subscription";

@Component({
  selector: 'app-postdtails',
  templateUrl: './postdtails.component.html',
  styleUrls: ['./postdtails.component.css']
})
export class PostdtailsComponent implements OnInit, OnDestroy {
  constructor(private servic: PostservicesService, private route: ActivatedRoute, private router:Router) {

  }

  id: string | null = null;
  dtails?: blogpostshow;
  unsubcb?: Subscription;
  unsubforupdate?: Subscription

  ngOnInit(): void {
    this.unsubcb= this.route.paramMap.subscribe({
      next: (params) => {
        this.id = params.get('id')
        if (this.id) {
          this.servic.getpostdtails(this.id).subscribe({
            next: (res) => {
              this.dtails = res
            }
          })
        }
      }
    })
  }

  edited() {

    const _updatepost : updatepost = {
      id: this.dtails?.id ?? '',
      title: this.dtails?.title ?? '',
      urlhandler: this.dtails?.urlhandler ?? '',
      Author: this.dtails?.Author ?? '',
      cotent: this.dtails?.cotent ?? '',
      img: this.dtails?.img ?? '',
      date: this.dtails?.date ?? new Date(),
      shorttitle: this.dtails?.shorttitle ?? '',
      isvisible: this.dtails?.isvisible ?? true,
    };
   if (this.id){
    this.unsubforupdate= this.servic.updatepost(this.id,_updatepost).subscribe({
       next:(res)=>{
         this.router.navigateByUrl('/admin/Post');
       }
     })
   }
  }

  ngOnDestroy(): void {
this.unsubcb?.unsubscribe();
this.unsubforupdate?.unsubscribe();
  }


}
