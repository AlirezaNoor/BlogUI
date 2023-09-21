import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostbloglistComponent } from './postbloglist.component';

describe('PostbloglistComponent', () => {
  let component: PostbloglistComponent;
  let fixture: ComponentFixture<PostbloglistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostbloglistComponent]
    });
    fixture = TestBed.createComponent(PostbloglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
