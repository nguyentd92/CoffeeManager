import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-calculator',
  templateUrl: './order-calculator.component.html',
  styleUrls: ['./order-calculator.component.sass']
})
export class OrderCalculatorComponent implements OnInit {

  value = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
