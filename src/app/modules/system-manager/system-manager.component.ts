import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-system-manager',
  templateUrl: './system-manager.component.html',
  styleUrls: ['./system-manager.component.sass'],
})
export class SystemManagerComponent implements OnInit {
  isCollapsed = false;

  constructor() {}

  ngOnInit(): void {}
}
