import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixieAppComponent } from './fixie-app.component';

describe('FixieAppComponent', () => {
  let component: FixieAppComponent;
  let fixture: ComponentFixture<FixieAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixieAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FixieAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
