import {Component} from '@angular/core';
import {Loginmodel} from "../model/Loginmodel";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  model: Loginmodel;

  constructor() {

    this.model = {
      Email: "",
      password: ""
    }
  }

  onsubmit():void{
    console.log(this.model);
  }

}
