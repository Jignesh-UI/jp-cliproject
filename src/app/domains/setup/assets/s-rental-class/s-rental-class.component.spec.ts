import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SRentalClassComponent } from './s-rental-class.component';

describe('SRentalClassComponent', () => {
  let component: SRentalClassComponent;
  let fixture: ComponentFixture<SRentalClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SRentalClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SRentalClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
