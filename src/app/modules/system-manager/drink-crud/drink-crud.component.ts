import { Component, OnInit } from '@angular/core';
import { DrinkEntity } from 'src/app/core';
import { DrinkCreateComponent } from './drink-create/drink-create.component';
import { NzModalService } from 'ng-zorro-antd';

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

  constructor(private modal: NzModalService) {}

  ngOnInit(): void {}

  createComponentModal(): void {
    const modal = this.modal.create({
      nzTitle: 'Modal Title',
      nzContent: DrinkCreateComponent,
      nzGetContainer: () => document.body,
      nzComponentParams: {
        title: 'title in component',
        subtitle: 'component sub title，will be changed after 2 sec',
      },
      nzOnOk: () => new Promise((resolve) => setTimeout(resolve, 1000)),
      nzFooter: [
        {
          label: 'change component title from outside',
          onClick: (componentInstance) => {
            componentInstance!.title = 'title in inner component is changed';
          },
        },
      ],
    });
    const instance = modal.getContentComponent();
    modal.afterOpen.subscribe(() => console.log('[afterOpen] emitted!'));
    // Return a result when closed
    modal.afterClose.subscribe((result) =>
      console.log('[afterClose] The result is:', result)
    );

    // delay until modal instance created
    setTimeout(() => {
      instance.subtitle = 'sub title is changed';
    }, 2000);
  }

  onQueryParamsChange(event) {
    
  }
}
