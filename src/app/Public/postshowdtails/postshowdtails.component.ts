import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-postshowdtails',
  templateUrl: './postshowdtails.component.html',
  styleUrls: ['./postshowdtails.component.css']
})
export class PostshowdtailsComponent implements  OnInit{
  constructor(private  route:ActivatedRoute) {
  }
  url:string |null=null;
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(res)=>{ this.url=res.get('url')}
    })
  }

}
