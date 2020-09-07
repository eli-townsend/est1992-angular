import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstHeaderComponent } from './est-header.component';

describe('EstHeaderComponent', () => {
  let component: EstHeaderComponent;
  let fixture: ComponentFixture<EstHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
