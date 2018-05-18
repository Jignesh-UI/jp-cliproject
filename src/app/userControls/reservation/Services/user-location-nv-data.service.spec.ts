import { TestBed, inject } from '@angular/core/testing';

import { UserLocationNvDataService } from './user-location-nv-data.service';

describe('UserLocationNvDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserLocationNvDataService]
    });
  });

  it('should be created', inject([UserLocationNvDataService], (service: UserLocationNvDataService) => {
    expect(service).toBeTruthy();
  }));
});
