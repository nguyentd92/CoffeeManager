import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayLogsContainerComponent } from './today-logs-container.component';

describe('TodayLogsContainerComponent', () => {
  let component: TodayLogsContainerComponent;
  let fixture: ComponentFixture<TodayLogsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodayLogsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayLogsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
