import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseLayout } from './expense-layout';

describe('ExpenseLayout', () => {
  let component: ExpenseLayout;
  let fixture: ComponentFixture<ExpenseLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpenseLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpenseLayout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
