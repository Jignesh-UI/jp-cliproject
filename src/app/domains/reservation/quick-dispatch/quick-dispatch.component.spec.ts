import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickDispatchComponent } from './quick-dispatch.component';

describe('QuickDispatchComponent', () => {
  let component: QuickDispatchComponent;
  let fixture: ComponentFixture<QuickDispatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickDispatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickDispatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
