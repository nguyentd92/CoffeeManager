import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-drink-create',
  templateUrl: './drink-create.component.html',
  styleUrls: ['./drink-create.component.sass'],
})
export class DrinkCreateComponent implements OnInit {
  @Input() title?: string;
  @Input() subtitle?: string;
  

  ngOnInit(): void {}

}
