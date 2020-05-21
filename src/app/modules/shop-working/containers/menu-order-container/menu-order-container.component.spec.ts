import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuOrderContainerComponent } from './menu-order-container.component';

describe('MenuOrderContainerComponent', () => {
  let component: MenuOrderContainerComponent;
  let fixture: ComponentFixture<MenuOrderContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuOrderContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuOrderContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
