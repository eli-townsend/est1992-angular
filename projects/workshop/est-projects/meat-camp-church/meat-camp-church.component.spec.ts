import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeatCampChurchComponent } from './meat-camp-church.component';

describe('MeatCampChurchComponent', () => {
  let component: MeatCampChurchComponent;
  let fixture: ComponentFixture<MeatCampChurchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeatCampChurchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeatCampChurchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
