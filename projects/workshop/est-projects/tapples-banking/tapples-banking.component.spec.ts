import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TapplesBankingComponent } from './tapples-banking.component';

describe('TapplesBankingComponent', () => {
  let component: TapplesBankingComponent;
  let fixture: ComponentFixture<TapplesBankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TapplesBankingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TapplesBankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
