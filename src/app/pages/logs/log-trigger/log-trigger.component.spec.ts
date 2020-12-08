import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogTriggerComponent } from './log-trigger.component';

describe('LogTriggerComponent', () => {
  let component: LogTriggerComponent;
  let fixture: ComponentFixture<LogTriggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogTriggerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogTriggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
