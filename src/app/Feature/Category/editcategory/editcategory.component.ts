import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLinkActive} from '@angular/router';
import {Subscription} from 'rxjs';
import {CategoryserviecService} from '../services/categoryserviec.service';
import {categoryshow} from '../models/Categoriesshow.model';

@Component({
  selector: 'app-editcategory',
  templateUrl: './editcategory.component.html',
  styleUrls: ['./editcategory.component.css']
})
export class EditcategoryComponent implements OnInit, OnDestroy {
  constructor(private route: ActivatedRoute, private serve: CategoryserviecService) {
  }

  id: string | null = null;
  isforunsub?: Subscription;
  category?: categoryshow;

  ngOnInit(): void {
    this.isforunsub = this.route.paramMap.subscribe({
      next: (param) => {
        this.id = param.get('id');
        if (this.id) {
    this.serve.getdtails(this.id).subscribe({
            next: (res) => {
              this.category = res;
            }
          })
        }
      }

    })
  }

  onsubmit() {
console.log(this.category)
  }

  ngOnDestroy(): void {
    this.isforunsub?.unsubscribe();
  }

}
