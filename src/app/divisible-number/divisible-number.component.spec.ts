import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisibleNumberComponent } from './divisible-number.component';

describe('DivisibleNumberComponent', () => {
  let component: DivisibleNumberComponent;
  let fixture: ComponentFixture<DivisibleNumberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DivisibleNumberComponent]
    });
    fixture = TestBed.createComponent(DivisibleNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
