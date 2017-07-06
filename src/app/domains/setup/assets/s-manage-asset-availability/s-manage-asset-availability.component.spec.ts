import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SManageAssetAvailabilityComponent } from './s-manage-asset-availability.component';

describe('SManageAssetAvailabilityComponent', () => {
  let component: SManageAssetAvailabilityComponent;
  let fixture: ComponentFixture<SManageAssetAvailabilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SManageAssetAvailabilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SManageAssetAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
