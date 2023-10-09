import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {addpost} from "../models/Blogpost.requst";
import {Observable} from "rxjs/internal/Observable";
import {environment} from "../../../../environments/environment";
import {blogpostshow} from "../models/postblogshow";
import {updatepost} from "../models/updatepost";

@Injectable({
  providedIn: 'root'
})
export class PostservicesService {
  constructor(private http: HttpClient) {
  }

  addpostblog(postblog: addpost): Observable<void> {
    return this.http.post<void>(`${environment.baseapi}/api/PostBlog/postblog`, postblog);
  }

  getall(): Observable<blogpostshow[]> {
    return this.http.get<blogpostshow[]>(`${environment.baseapi}/api/PostBlog/postblog`);
  }

  getpostdtails(id: string ): Observable<blogpostshow> {
  return  this.http.get<blogpostshow>(`${environment.baseapi}/api/PostBlog/postblog/${id}`)
  }

  updatepost(id: string, blog: updatepost):Observable<blogpostshow>{
    return this.http.put<blogpostshow>(`${environment.baseapi}/api/PostBlog/postblogedit/${id}`,blog);
  }

  deletepost(id:string):Observable<void>{
    return this.http.delete<void>(`${environment.baseapi}/api/PostBlog/Delete/${id}`)
  }

  getbyurl(url:string):Observable<blogpostshow>{
    return this.http.get<blogpostshow>(`${environment.baseapi}/api/PostBlog/dtails/${url}`)
  }
}
