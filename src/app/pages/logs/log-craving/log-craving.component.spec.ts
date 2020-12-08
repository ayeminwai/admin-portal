import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogCravingComponent } from './log-craving.component';

describe('LogCravingComponent', () => {
  let component: LogCravingComponent;
  let fixture: ComponentFixture<LogCravingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogCravingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogCravingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
