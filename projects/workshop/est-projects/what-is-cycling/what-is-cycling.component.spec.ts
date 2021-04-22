import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIsCyclingComponent } from './what-is-cycling.component';

describe('WhatIsCyclingComponent', () => {
  let component: WhatIsCyclingComponent;
  let fixture: ComponentFixture<WhatIsCyclingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatIsCyclingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatIsCyclingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
