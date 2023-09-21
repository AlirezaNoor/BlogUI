import {Component, OnDestroy, OnInit} from '@angular/core';
import {PostservicesService} from "../../services/postservices.service";
import {blogpostshow} from "../../models/postblogshow";

@Component({
  selector: 'app-postbloglist',
  templateUrl: './postbloglist.component.html',
  styleUrls: ['./postbloglist.component.css']
})
export class PostbloglistComponent implements OnInit,OnDestroy{
  postblog?:blogpostshow[];
constructor(private servic :PostservicesService) {
}

  ngOnDestroy(): void {

  }

  ngOnInit(): void {
    this.servic.getall().subscribe({
      next:(res)=>{this.postblog=res
        console.log(res)
      }
    })
  }
}
