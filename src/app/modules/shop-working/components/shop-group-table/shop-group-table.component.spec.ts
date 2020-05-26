import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopGroupTableComponent } from './shop-group-table.component';

describe('ShopGroupTableComponent', () => {
  let component: ShopGroupTableComponent;
  let fixture: ComponentFixture<ShopGroupTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopGroupTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopGroupTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
