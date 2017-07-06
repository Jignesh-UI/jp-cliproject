import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxChargeComponent } from './tax-charge.component';

describe('TaxChargeComponent', () => {
  let component: TaxChargeComponent;
  let fixture: ComponentFixture<TaxChargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxChargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxChargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
