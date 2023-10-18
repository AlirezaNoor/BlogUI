import {Component} from '@angular/core';
import {Loginmodel} from "../model/Loginmodel";
import {LoginserviceService} from "../services/loginservice.service";
import {CookieService} from "ngx-cookie-service";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  model: Loginmodel;

  constructor(private service:LoginserviceService,private cookieService: CookieService, private redireted:Router) {

    this.model = {
      Email: "",
      password: ""
    }
  }

  onsubmit():void{
 this.service.login(this.model).subscribe(
   {
     next:(res)=>{console.log(res)
       this.cookieService.set("Authorization",`Bearer ${res.Token}`,undefined,"/",undefined,true,"Strict");
       this.redireted.navigateByUrl("/");
     },
     error:(res)=>{console.log(res)}
   }
 );
   }

}
