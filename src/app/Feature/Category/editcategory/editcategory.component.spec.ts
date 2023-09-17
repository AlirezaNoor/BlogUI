import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcategoryComponent } from './editcategory.component';

describe('EditcategoryComponent', () => {
  let component: EditcategoryComponent;
  let fixture: ComponentFixture<EditcategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditcategoryComponent]
    });
    fixture = TestBed.createComponent(EditcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
