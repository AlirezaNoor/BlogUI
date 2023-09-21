import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostdtailsComponent } from './postdtails.component';

describe('PostdtailsComponent', () => {
  let component: PostdtailsComponent;
  let fixture: ComponentFixture<PostdtailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostdtailsComponent]
    });
    fixture = TestBed.createComponent(PostdtailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
