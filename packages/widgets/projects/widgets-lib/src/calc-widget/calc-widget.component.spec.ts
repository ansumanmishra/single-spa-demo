import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcWidgetComponent } from './calc-widget.component';

describe('CalcWidgetComponent', () => {
  let component: CalcWidgetComponent;
  let fixture: ComponentFixture<CalcWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
