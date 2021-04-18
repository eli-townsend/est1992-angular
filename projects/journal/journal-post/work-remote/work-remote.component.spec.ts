import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkRemoteComponent } from './work-remote.component';

describe('WorkRemoteComponent', () => {
  let component: WorkRemoteComponent;
  let fixture: ComponentFixture<WorkRemoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkRemoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkRemoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
