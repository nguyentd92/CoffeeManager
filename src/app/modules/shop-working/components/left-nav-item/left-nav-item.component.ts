import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RouterInfo } from 'src/app/core';

@Component({
  selector: 'app-left-nav-item',

  styleUrls: ['./left-nav-item.component.sass'],
  template: `
    <div class="wrapper" (click)="goTo()" [ngClass]="{ active: routeInfo.isCurrent }">
      <img src="/assets/images/booth.svg" />
    </div>
  `,
})
export class LeftNavItemComponent {
  @Input() routeInfo: RouterInfo
  
  constructor(private router: Router, private route: ActivatedRoute) {}

  goTo() {
    const {path} = this.routeInfo

    this.router.navigate([path], { relativeTo: this.route });
  }
}
