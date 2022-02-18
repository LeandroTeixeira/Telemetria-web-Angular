import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WheelPositionComponent } from './wheel-position.component';

describe('WheelPositionComponent', () => {
  let component: WheelPositionComponent;
  let fixture: ComponentFixture<WheelPositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WheelPositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WheelPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
