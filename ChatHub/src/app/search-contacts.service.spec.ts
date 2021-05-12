import { TestBed } from '@angular/core/testing';

import { SearchContactsService } from './search-contacts.service';

describe('SearchContactsService', () => {
  let service: SearchContactsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchContactsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
