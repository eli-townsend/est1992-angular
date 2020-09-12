import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogBlurbComponent } from './blog-blurb.component';

describe('BlogBlurbComponent', () => {
  let component: BlogBlurbComponent;
  let fixture: ComponentFixture<BlogBlurbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogBlurbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogBlurbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
