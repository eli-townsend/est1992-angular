import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopBlurbComponent } from './workshop-blurb.component';

describe('WorkshopBlurbComponent', () => {
  let component: WorkshopBlurbComponent;
  let fixture: ComponentFixture<WorkshopBlurbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkshopBlurbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshopBlurbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
