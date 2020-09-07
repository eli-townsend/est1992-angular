import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstFooterComponent } from './est-footer.component';

describe('EstFooterComponent', () => {
  let component: EstFooterComponent;
  let fixture: ComponentFixture<EstFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
