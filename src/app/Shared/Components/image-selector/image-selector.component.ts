import {Component, OnInit} from '@angular/core';
import {ImgServiceService} from "./img-service.service";
   import {Observable} from "rxjs/internal/Observable";
import {IMGbog} from "./models/IMGbog";

@Component({
  selector: 'app-image-selector',
  templateUrl: './image-selector.component.html',
  styleUrls: ['./image-selector.component.css']
})
export class ImageSelectorComponent  implements OnInit{
  constructor(private service:ImgServiceService) {
  }

private file? :File;
  tiltle:string='';
  filename:string='';
  images$?:Observable<IMGbog[]>
  ngOnInit(): void {
   this.getall()
  }
  uploadimage(e:Event){
     const elementfile=e.currentTarget as HTMLInputElement;
this.file=elementfile.files?.[0];
  }

  uploaded():void{
if (this.file!=null && this.filename!=null&& this.tiltle!=null)
{
  this.service.uploadimg(this.file,this.tiltle,this.filename).subscribe({
    next:(res)=>{ console.log(res)}
  })
}
  }

private getall(){
  this.images$=this.service.getall()
}
}
