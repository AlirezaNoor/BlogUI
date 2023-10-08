import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostshowdtailsComponent } from './postshowdtails.component';

describe('PostshowdtailsComponent', () => {
  let component: PostshowdtailsComponent;
  let fixture: ComponentFixture<PostshowdtailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostshowdtailsComponent]
    });
    fixture = TestBed.createComponent(PostshowdtailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
