import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {IMGbog} from "./models/IMGbog";
import {environment} from "../../../../environments/environment";
import {blogpostshow} from "../../../Feature/PostBlog/models/postblogshow";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ImgServiceService {
 selectedimg:BehaviorSubject<IMGbog> = new BehaviorSubject<IMGbog>({
    id:'',
    tiltle:'',
    urlhandle:'',
    filename:'',
    fileExtension:''
  });
  constructor(private http: HttpClient) { }


  uploadimg(file:File ,tiltle:string,filename:string):Observable<IMGbog>{
    const data=new FormData();
    data.append("file",file);
    data.append("tiltle",tiltle);
    data.append("filename",filename);
    return this.http.post<IMGbog>(`${environment.baseapi}/api/image/uploadimage`,data)
  }

  getall():Observable<IMGbog[]>{
    return this.http.get<IMGbog[]>(`${environment.baseapi}/api/image/all`)
  }

  selectmg(img:IMGbog):void{
    this.selectedimg.next(img)
  }
  onselectedimg():Observable<IMGbog>{
    return this.selectedimg.asObservable()
  }
}
