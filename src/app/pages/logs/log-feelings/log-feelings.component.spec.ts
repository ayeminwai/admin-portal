import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogFeelingsComponent } from './log-feelings.component';

describe('LogFeelingsComponent', () => {
  let component: LogFeelingsComponent;
  let fixture: ComponentFixture<LogFeelingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogFeelingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogFeelingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
