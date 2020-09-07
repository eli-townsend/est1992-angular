import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstComponentsComponent } from './est-components.component';

describe('EstComponentsComponent', () => {
  let component: EstComponentsComponent;
  let fixture: ComponentFixture<EstComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
