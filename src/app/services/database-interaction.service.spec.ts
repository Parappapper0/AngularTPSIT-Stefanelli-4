import { TestBed } from '@angular/core/testing';

import { DatabaseInteractionService } from './database-interaction.service';

describe('DatabaseInteractionService', () => {
  let service: DatabaseInteractionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatabaseInteractionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
