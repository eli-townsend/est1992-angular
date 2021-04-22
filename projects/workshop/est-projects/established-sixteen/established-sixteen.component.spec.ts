import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstablishedSixteenComponent } from './established-sixteen.component';

describe('EstablishedSixteenComponent', () => {
  let component: EstablishedSixteenComponent;
  let fixture: ComponentFixture<EstablishedSixteenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstablishedSixteenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstablishedSixteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
