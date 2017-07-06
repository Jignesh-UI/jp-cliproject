import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AapaComponent } from './aapa.component';

describe('AapaComponent', () => {
  let component: AapaComponent;
  let fixture: ComponentFixture<AapaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AapaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
