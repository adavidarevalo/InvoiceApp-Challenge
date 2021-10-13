import { TestBed } from '@angular/core/testing';

import { PlusAllCardsService } from './plus-all-cards.service';

describe('PlusAllCardsService', () => {
  let service: PlusAllCardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlusAllCardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
