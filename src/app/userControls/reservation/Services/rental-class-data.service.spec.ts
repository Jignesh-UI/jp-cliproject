import { TestBed, inject } from '@angular/core/testing';

import { RentalClassDataService } from './rental-class-data.service';

describe('RentalClassDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RentalClassDataService]
    });
  });

  it('should be created', inject([RentalClassDataService], (service: RentalClassDataService) => {
    expect(service).toBeTruthy();
  }));
});
