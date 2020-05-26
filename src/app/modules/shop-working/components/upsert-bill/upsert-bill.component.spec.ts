import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpsertBillComponent } from './upsert-bill.component';

describe('UpsertBillComponent', () => {
  let component: UpsertBillComponent;
  let fixture: ComponentFixture<UpsertBillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpsertBillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpsertBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
