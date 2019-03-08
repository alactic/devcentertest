import { TestBed } from '@angular/core/testing';

import { ArtistsService } from './artists.service';
import {expect} from "@angular/core/testing/src/testing_internal";

describe('ArtistsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArtistsService = TestBed.get(ArtistsService);
    expect(service).toBeTruthy();
  });
});
