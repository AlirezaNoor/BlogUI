import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Loginmodel} from "../model/Loginmodel";
import {BehaviorSubject, Observer} from "rxjs";
import {logingrespons} from "../model/logingrespons";
import {environment} from "../../../../environments/environment";
import {Observable} from "rxjs/internal/Observable";
import {model} from "../model/model";
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  user$ = new BehaviorSubject<model | undefined>(undefined)

  constructor(private htt: HttpClient, private cookieService: CookieService) {
  }


  login(loginrequset: Loginmodel): Observable<logingrespons> {
    return this.htt.post<logingrespons>(`${environment.baseapi}/api/Athu/login`, {
      Email: loginrequset.Email,
      password: loginrequset.password
    });
  }

  setuser(user: model): void {
    this.user$.next(user);
    localStorage.setItem('user-name', user.email);
    localStorage.setItem('user-roles', user.role.join(','));
  }

  userback(): Observable<model | undefined> {
    return this.user$.asObservable();
  }

  Logout(): void {
    localStorage.clear();
    this.cookieService.delete('Authorization', '/');
    this.user$.next(undefined);
  }

  getuser(): model | undefined {
    const email = localStorage.getItem('user-name')
    const role = localStorage.getItem('user-roles')
    if (email &&role){
     const myuser:model={
       email:email,
       role:role.split(',')
     }
     return myuser
    }
    return undefined;
  }
}
