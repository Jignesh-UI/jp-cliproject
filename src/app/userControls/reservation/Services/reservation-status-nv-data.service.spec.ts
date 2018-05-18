import { TestBed, inject } from '@angular/core/testing';

import { ReservationStatusNvDataService } from './reservation-status-nv-data.service';

describe('ReservationStatusNvDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReservationStatusNvDataService]
    });
  });

  it('should be created', inject([ReservationStatusNvDataService], (service: ReservationStatusNvDataService) => {
    expect(service).toBeTruthy();
  }));
});
