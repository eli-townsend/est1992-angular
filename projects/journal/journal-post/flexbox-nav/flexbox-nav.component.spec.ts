import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexboxNavComponent } from './flexbox-nav.component';

describe('FlexboxNavComponent', () => {
  let component: FlexboxNavComponent;
  let fixture: ComponentFixture<FlexboxNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlexboxNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexboxNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
