import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostbolgaddComponent } from './postbolgadd.component';

describe('PostbolgaddComponent', () => {
  let component: PostbolgaddComponent;
  let fixture: ComponentFixture<PostbolgaddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostbolgaddComponent]
    });
    fixture = TestBed.createComponent(PostbolgaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
