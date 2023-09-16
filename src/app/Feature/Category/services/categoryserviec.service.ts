import { Injectable } from '@angular/core';
import { categorymodels } from '../models/Categories-add-request.models';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CategoryserviecService {

  constructor(private http:HttpClient) { }

  addcategory(model:categorymodels):Observable<void>{
    return this.http.post<void>('http://localhost:5187/api/Category/Categories',model);
  }
}
