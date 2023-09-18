import { Injectable } from '@angular/core';
import { categorymodels } from '../models/Categories-add-request.models';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { categoryshow } from '../models/Categoriesshow.model';
import { environment } from 'src/environments/environment.development';
import {CategoryupdateModels} from "../models/categoryupdate.models";

@Injectable({
  providedIn: 'root'
})
export class CategoryserviecService {

  constructor(private http:HttpClient) { }

  addcategory(model:categorymodels):Observable<void>{
    return this.http.post<void>(`${environment.baseapi}/api/Category/Categories`,model);
  }

  getallcategories():Observable<categoryshow[]>{
    return this.http.get<categoryshow[]>(`${environment.baseapi}/api/Category/categoriesList`);
  }

  getdtails( id:string):Observable<categoryshow>{
return this.http.get<categoryshow>(`${environment.baseapi}/api/Category/category/${id}`)
  }

  updatecategory(id:string ,update:CategoryupdateModels):Observable<categoryshow>{
    return this.http.put<categoryshow>(`${environment.baseapi}/api/Category/catregoryedit/${id}`,update);

  }
  deletecategoryservice(id : string):Observable<categoryshow>{
    return  this.http.delete<categoryshow>(`${environment.baseapi}/api/Category/catregoryedit/${id}`);
  }


}
