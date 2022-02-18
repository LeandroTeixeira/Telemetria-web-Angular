import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RBreakTempComponent } from './r-break-temp.component';

describe('RBreakTempComponent', () => {
  let component: RBreakTempComponent;
  let fixture: ComponentFixture<RBreakTempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RBreakTempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RBreakTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
