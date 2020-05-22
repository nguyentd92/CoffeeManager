import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkCrudComponent } from './drink-crud.component';

describe('DrinkCrudComponent', () => {
  let component: DrinkCrudComponent;
  let fixture: ComponentFixture<DrinkCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinkCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
