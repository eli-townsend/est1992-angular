import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdMoveComponent } from './od-move.component';

describe('OdMoveComponent', () => {
  let component: OdMoveComponent;
  let fixture: ComponentFixture<OdMoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OdMoveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OdMoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
