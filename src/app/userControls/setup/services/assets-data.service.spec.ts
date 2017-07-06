import { TestBed, inject } from '@angular/core/testing';

import { AssetsDataService } from './assets-data.service';

describe('AssetsDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AssetsDataService]
    });
  });

  it('should be created', inject([AssetsDataService], (service: AssetsDataService) => {
    expect(service).toBeTruthy();
  }));
});
