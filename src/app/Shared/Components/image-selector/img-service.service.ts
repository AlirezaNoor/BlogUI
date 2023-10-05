import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {IMGbog} from "./models/IMGbog";
import {environment} from "../../../../environments/environment";
import {blogpostshow} from "../../../Feature/PostBlog/models/postblogshow";

@Injectable({
  providedIn: 'root'
})
export class ImgServiceService {

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
}
