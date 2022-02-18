import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TPSComponent } from './tps.component';

describe('TPSComponent', () => {
  let component: TPSComponent;
  let fixture: ComponentFixture<TPSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TPSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TPSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
