import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-left-nav-item',

  styleUrls: ['./left-nav-item.component.sass'],
  template: `
    <div class="wrapper" (click)="goTo()" [ngClass]="{ active: isActive }">
      <img src="/assets/images/booth.svg" />
    </div>
  `,
})
export class LeftNavItemComponent {
  @Input() imgUrl: string;
  @Input() isActive: false;
  @Input() path: string;

  constructor(private router: Router, private route: ActivatedRoute) {}

  goTo() {
    this.router.navigate([this.path], { relativeTo: this.route });
  }
}
