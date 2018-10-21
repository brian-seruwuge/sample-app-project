import { TestBed, inject } from '@angular/core/testing';

import { ShoppersService } from './shoppers.service';

describe('ShoppersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShoppersService]
    });
  });

  it('should be created', inject([ShoppersService], (service: ShoppersService) => {
    expect(service).toBeTruthy();
  }));
});
