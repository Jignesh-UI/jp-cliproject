import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { STransferAssetsComponent } from './s-transfer-assets.component';

describe('STransferAssetsComponent', () => {
  let component: STransferAssetsComponent;
  let fixture: ComponentFixture<STransferAssetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ STransferAssetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(STransferAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
