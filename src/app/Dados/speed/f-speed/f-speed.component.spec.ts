import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FSpeedComponent } from './f-speed.component';

describe('FSpeedComponent', () => {
  let component: FSpeedComponent;
  let fixture: ComponentFixture<FSpeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FSpeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FSpeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
