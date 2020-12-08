import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ECheckinComponent } from './e-checkin.component';

describe('ECheckinComponent', () => {
  let component: ECheckinComponent;
  let fixture: ComponentFixture<ECheckinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ECheckinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ECheckinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
