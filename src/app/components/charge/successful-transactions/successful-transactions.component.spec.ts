import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfulTransactionsComponent } from './successful-transactions.component';

describe('SuccessfulTransactionsComponent', () => {
  let component: SuccessfulTransactionsComponent;
  let fixture: ComponentFixture<SuccessfulTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessfulTransactionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessfulTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
