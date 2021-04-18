import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeWsComponent } from './code-ws.component';

describe('CodeWsComponent', () => {
  let component: CodeWsComponent;
  let fixture: ComponentFixture<CodeWsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeWsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeWsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
