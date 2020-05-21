import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCalculatorComponent } from './order-calculator.component';

describe('OrderCalculatorComponent', () => {
  let component: OrderCalculatorComponent;
  let fixture: ComponentFixture<OrderCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
