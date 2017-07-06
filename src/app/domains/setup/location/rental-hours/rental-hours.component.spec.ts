import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalHoursComponent } from './rental-hours.component';

describe('RentalHoursComponent', () => {
  let component: RentalHoursComponent;
  let fixture: ComponentFixture<RentalHoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentalHoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
