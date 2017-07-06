import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalClassComponent } from './rental-class.component';

describe('RentalClassComponent', () => {
  let component: RentalClassComponent;
  let fixture: ComponentFixture<RentalClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentalClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
