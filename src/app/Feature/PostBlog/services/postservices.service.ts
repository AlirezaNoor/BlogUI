import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {addpost} from "../models/Blogpost.requst";
import {Observable} from "rxjs/internal/Observable";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PostservicesService {
constructor(private http: HttpClient) {
}

addpostblog(postblog:addpost):Observable<void>
{
  return this.http.post<void>(`${environment.baseapi}/api/PostBlog/postblog`,postblog);
}
}
