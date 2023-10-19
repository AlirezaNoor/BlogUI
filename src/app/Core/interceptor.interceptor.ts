import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {CookieService} from "ngx-cookie-service";

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  constructor(private  srvice:CookieService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
if (this.checkfortoken(request)){
  const athurequest=request.clone({setHeaders:{
      'Authorization':this.srvice.get('Authorization')


    }})


  return next.handle(athurequest);
}
    return next.handle(request);
  }

  private checkfortoken(request:HttpRequest<any>):boolean{
    return request.urlWithParams.indexOf('addathu',0)> -1?true:false
  }
}
