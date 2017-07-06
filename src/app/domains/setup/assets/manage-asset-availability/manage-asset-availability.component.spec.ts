import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAssetAvailabilityComponent } from './manage-asset-availability.component';

describe('ManageAssetAvailabilityComponent', () => {
  let component: ManageAssetAvailabilityComponent;
  let fixture: ComponentFixture<ManageAssetAvailabilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageAssetAvailabilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageAssetAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
