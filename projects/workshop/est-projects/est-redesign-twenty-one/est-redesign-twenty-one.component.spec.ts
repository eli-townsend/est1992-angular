import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstRedesignTwentyOneComponent } from './est-redesign-twenty-one.component';

describe('EstRedesignTwentyOneComponent', () => {
  let component: EstRedesignTwentyOneComponent;
  let fixture: ComponentFixture<EstRedesignTwentyOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstRedesignTwentyOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstRedesignTwentyOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
