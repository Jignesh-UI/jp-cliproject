import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalPriceComponent } from './rental-price.component';

describe('RentalPriceComponent', () => {
  let component: RentalPriceComponent;
  let fixture: ComponentFixture<RentalPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentalPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
