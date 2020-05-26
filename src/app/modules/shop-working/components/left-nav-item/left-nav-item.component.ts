import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-left-nav-item',

  styleUrls: ['./left-nav-item.component.sass'],
  template: `
    <div class="wrapper" [ngClass]="{'active': isActive}">
      <img src="/assets/images/booth.svg" />
    </div>
  `,
})
export class LeftNavItemComponent {
  @Input() imgUrl: string;
  @Input() isActive: false;
}
