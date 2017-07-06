import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationNavigationComponent } from './reservation-navigation.component';

describe('ReservationNavigationComponent', () => {
  let component: ReservationNavigationComponent;
  let fixture: ComponentFixture<ReservationNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservationNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
