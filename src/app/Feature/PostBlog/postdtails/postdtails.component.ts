import {Component, OnDestroy, OnInit} from '@angular/core';
import {PostservicesService} from "../services/postservices.service";
import {ActivatedRoute, Router, RouterLink, RouterLinkActive} from "@angular/router";
import {updatepost} from "../models/updatepost";
import {blogpostshow} from "../models/postblogshow";
import {Subscription} from "rxjs/internal/Subscription";
import {Observable} from "rxjs/internal/Observable";
import {categoryshow} from "../../Category/models/Categoriesshow.model";
import {CategoryserviecService} from "../../Category/services/categoryserviec.service";
import {ImgServiceService} from "../../../Shared/Components/image-selector/img-service.service";

@Component({
  selector: 'app-postdtails',
  templateUrl: './postdtails.component.html',
  styleUrls: ['./postdtails.component.css']
})
export class PostdtailsComponent implements OnInit, OnDestroy {
  constructor(private servic: PostservicesService, private route: ActivatedRoute, private router: Router, private categoryser: CategoryserviecService, private imgservice:ImgServiceService) {

  }
isupldadimagevisible:boolean=false;
  id: string | null = null;
  dtails?: blogpostshow;
  unsubcb?: Subscription;
  unsubforupdate?: Subscription
  unsubimg?: Subscription
  category$ ?: Observable<categoryshow[]>
  categoryselectrd?: string[]

  ngOnInit(): void {
    this.category$ = this.categoryser.getallcategories()
    this.unsubcb = this.route.paramMap.subscribe({
      next: (params) => {
        this.id = params.get('id')
        if (this.id) {
          this.servic.getpostdtails(this.id).subscribe({
            next: (res) => {
              this.dtails = res;
              this.categoryselectrd = res.categories.map(e => e.id);
              console.log(this.categoryselectrd);
            }
          })

        }

          this.unsubimg= this.imgservice.onselectedimg().subscribe({
            next:(res)=>{
              if (this.dtails){
                this.dtails.img=res.urlhandle
                console.log(`${res} ta inja onnnmad`)
                this.isupldadimagevisible=false;
              }
            } ,
            error:(res)=>{console.error()}
          })

      }
    })
  }
  showmodal():void{
    this.isupldadimagevisible=!this.isupldadimagevisible
  }
  edited() {

    const _updatepost: updatepost = {
      id: this.dtails?.id ?? '',
      title: this.dtails?.title ?? '',
      urlhandler: this.dtails?.urlhandler ?? '',
      Author: this.dtails?.Author ?? '',
      cotent: this.dtails?.cotent ?? '',
      img: this.dtails?.img ?? '',
      date: this.dtails?.date ?? new Date(),
      shorttitle: this.dtails?.shorttitle ?? '',
      isvisible: this.dtails?.isvisible ?? true,
      category: this.categoryselectrd ?? []
    };
    if (this.id) {

      this.unsubforupdate = this.servic.updatepost(this.id, _updatepost).subscribe({
        next: (res) => {
          console.log(res)
          console.log(_updatepost)
          this.router.navigateByUrl('/admin/Post');
        },
        error: (res) => {
          console.log(res)
        }
      })
    }
  }
Del(){
    if (this.id){
      this.servic.deletepost(this.id).subscribe({
        next:()=>{this.router.navigateByUrl('/admin/Post')}
      })
    }
}
  ngOnDestroy(): void {
    this.unsubcb?.unsubscribe();
    this.unsubforupdate?.unsubscribe();
    this.unsubimg?.unsubscribe();
  }


}
