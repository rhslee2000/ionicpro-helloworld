import { TestBed, inject } from '@angular/core/testing';

import { VibeService } from './vibe.service';

describe('VibeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VibeService]
    });
  });

  it('should be created', inject([VibeService], (service: VibeService) => {
    expect(service).toBeTruthy();
  }));
});
