import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BVoltageComponent } from './b-voltage.component';

describe('BVoltageComponent', () => {
  let component: BVoltageComponent;
  let fixture: ComponentFixture<BVoltageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BVoltageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BVoltageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
