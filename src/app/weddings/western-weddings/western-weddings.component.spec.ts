import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WesternWeddingsComponent } from './western-weddings.component';

describe('WesternWeddingsComponent', () => {
  let component: WesternWeddingsComponent;
  let fixture: ComponentFixture<WesternWeddingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WesternWeddingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WesternWeddingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
