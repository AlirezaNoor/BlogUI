import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Loginmodel} from "../model/Loginmodel";
import {Observer} from "rxjs";
import {logingrespons} from "../model/logingrespons";
import {environment} from "../../../../environments/environment";
import {Observable} from "rxjs/internal/Observable";

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private htt: HttpClient) {
  }


  login(loginrequset: Loginmodel): Observable<logingrespons> {
    return this.htt.post<logingrespons>(`${environment.baseapi}/api/Athu/login`, {
      Email: loginrequset.Email,
      password: loginrequset.password
    });
  }
}
