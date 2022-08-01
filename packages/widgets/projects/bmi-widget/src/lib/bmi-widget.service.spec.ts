import { TestBed } from '@angular/core/testing';

import { BmiWidgetService } from './bmi-widget.service';

describe('BmiWidgetService', () => {
  let service: BmiWidgetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BmiWidgetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
