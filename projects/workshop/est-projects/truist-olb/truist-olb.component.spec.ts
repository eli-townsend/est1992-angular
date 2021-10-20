import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TruistOlbComponent } from './truist-olb.component';

describe('TruistOlbComponent', () => {
  let component: TruistOlbComponent;
  let fixture: ComponentFixture<TruistOlbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TruistOlbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TruistOlbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
