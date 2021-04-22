import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdflComponent } from './odfl.component';

describe('OdflComponent', () => {
  let component: OdflComponent;
  let fixture: ComponentFixture<OdflComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OdflComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OdflComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
