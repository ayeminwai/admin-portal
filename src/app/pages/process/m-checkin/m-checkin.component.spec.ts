import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MCheckinComponent } from './m-checkin.component';

describe('MCheckinComponent', () => {
  let component: MCheckinComponent;
  let fixture: ComponentFixture<MCheckinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MCheckinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MCheckinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
