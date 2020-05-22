import { Component, OnInit } from '@angular/core';
import { DrinkEntity } from 'src/app/core';

const mockEntities: DrinkEntity[] = [
  {
    _id: '1',
    code: 'CP-1',
    name: 'Capuchino Cafe',
    shortName: 'Capuchino',
    sizePrices: [
      {
        sizeName: 'Small',
        sizeShortName: 'S',
        price: 30000,
      },
      {
        sizeName: 'Medium',
        sizeShortName: 'M',
        price: 46000,
      },
      {
        sizeName: 'Large',
        sizeShortName: 'L',
        price: 58000,
      },
    ],
  },
];

@Component({
  selector: 'app-drink-crud',
  templateUrl: './drink-crud.component.html',
  styleUrls: ['./drink-crud.component.sass'],
})
export class DrinkCrudComponent implements OnInit {
  total = 1;
  listOfRandomUser: DrinkEntity[] = mockEntities;
  loading = false;
  pageSize = 10;
  pageIndex = 1;
  filterGender = [
    { text: 'male', value: 'male' },
    { text: 'female', value: 'female' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
