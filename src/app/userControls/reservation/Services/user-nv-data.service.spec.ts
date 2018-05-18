import { TestBed, inject } from '@angular/core/testing';

import { UserNvDataService } from './user-nv-data.service';

describe('UserNvDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserNvDataService]
    });
  });

  it('should be created', inject([UserNvDataService], (service: UserNvDataService) => {
    expect(service).toBeTruthy();
  }));
});


