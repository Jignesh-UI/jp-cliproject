import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalFieldsComponent } from './global-fields.component';

describe('GlobalFieldsComponent', () => {
  let component: GlobalFieldsComponent;
  let fixture: ComponentFixture<GlobalFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
