import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodNoteGearComponent } from './food-note-gear.component';

describe('FoodNoteGearComponent', () => {
  let component: FoodNoteGearComponent;
  let fixture: ComponentFixture<FoodNoteGearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodNoteGearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodNoteGearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
