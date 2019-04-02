import { TestBed } from '@angular/core/testing';

import { ApiWeatherService } from './api-weather.service';

describe('ApiWeatherService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiWeatherService = TestBed.get(ApiWeatherService);
    expect(service).toBeTruthy();
  });
});
