import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstProjectFigureComponent } from './est-project-figure.component';

describe('EstProjectFigureComponent', () => {
  let component: EstProjectFigureComponent;
  let fixture: ComponentFixture<EstProjectFigureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstProjectFigureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstProjectFigureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
