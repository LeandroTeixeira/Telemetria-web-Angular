import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RSpeedComponent } from './r-speed.component';

describe('RSpeedComponent', () => {
  let component: RSpeedComponent;
  let fixture: ComponentFixture<RSpeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RSpeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RSpeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
