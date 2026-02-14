import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranisctionForm } from './tranisction-form';

describe('TranisctionForm', () => {
  let component: TranisctionForm;
  let fixture: ComponentFixture<TranisctionForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranisctionForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TranisctionForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
