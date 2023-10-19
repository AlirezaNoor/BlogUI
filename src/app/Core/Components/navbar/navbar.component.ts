import {Component, OnInit} from '@angular/core';
import {LoginserviceService} from "../../../Feature/auth/services/loginservice.service";
import {model} from "../../../Feature/auth/model/model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  User?: model;

  constructor(private service: LoginserviceService, private route:Router) {
  }

  ngOnInit(): void {
    this.service.userback().subscribe(
      {
        next: (res) => {
          this.User = res
        }
      }
    )
    this.User=this.service.getuser()

  }

  Logout(): void {
this.service.Logout();
this.route.navigateByUrl("/");

  }

}
