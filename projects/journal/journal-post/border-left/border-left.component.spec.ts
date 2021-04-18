import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorderLeftComponent } from './border-left.component';

describe('BorderLeftComponent', () => {
  let component: BorderLeftComponent;
  let fixture: ComponentFixture<BorderLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorderLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorderLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
