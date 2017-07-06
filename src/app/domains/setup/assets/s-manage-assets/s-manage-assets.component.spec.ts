import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SManageAssetsComponent } from './s-manage-assets.component';

describe('SManageAssetsComponent', () => {
  let component: SManageAssetsComponent;
  let fixture: ComponentFixture<SManageAssetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SManageAssetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SManageAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
