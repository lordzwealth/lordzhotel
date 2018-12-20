import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WellnessAndSpaComponent } from './wellness-and-spa.component';

describe('WellnessAndSpaComponent', () => {
  let component: WellnessAndSpaComponent;
  let fixture: ComponentFixture<WellnessAndSpaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WellnessAndSpaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WellnessAndSpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
