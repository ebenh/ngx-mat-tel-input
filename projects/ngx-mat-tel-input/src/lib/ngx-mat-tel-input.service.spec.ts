import { TestBed } from '@angular/core/testing';

import { NgxMatTelInputService } from './ngx-mat-tel-input.service';

describe('NgxMatTelInputService', () => {
  let service: NgxMatTelInputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxMatTelInputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
