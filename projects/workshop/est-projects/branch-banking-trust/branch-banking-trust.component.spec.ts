import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchBankingTrustComponent } from './branch-banking-trust.component';

describe('BranchBankingTrustComponent', () => {
  let component: BranchBankingTrustComponent;
  let fixture: ComponentFixture<BranchBankingTrustComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BranchBankingTrustComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchBankingTrustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
