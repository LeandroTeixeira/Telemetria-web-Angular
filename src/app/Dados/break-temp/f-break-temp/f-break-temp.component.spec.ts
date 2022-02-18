import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FBreakTempComponent } from './f-break-temp.component';

describe('FBreakTempComponent', () => {
  let component: FBreakTempComponent;
  let fixture: ComponentFixture<FBreakTempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FBreakTempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FBreakTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
