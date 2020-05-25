import { Component, OnInit, Input } from '@angular/core';
import { DrinkService, DrinkEntity } from 'src/app/core';
import { v4 as uuid } from 'uuid';

const drink: DrinkEntity = {
  _id: uuid(),
  code: 'Capuchino',
  name: 'CAPCF',
  sizePrices: {
    S: 33000,
    M: 42000,
    L: 54000,
  },
};

@Component({
  selector: 'app-drink-create',
  templateUrl: './drink-create.component.html',
  styleUrls: ['./drink-create.component.sass'],
})
export class DrinkCreateComponent implements OnInit {
  @Input() title?: string;
  @Input() subtitle?: string;

  constructor(private drinkService: DrinkService) {}

  ngOnInit(): void {
    this.drinkService.create(drink).subscribe((e) => console.log(drink));
  }
}
