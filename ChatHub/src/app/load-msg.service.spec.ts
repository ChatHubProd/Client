import { TestBed } from '@angular/core/testing';

import { LoadMsgService } from './load-msg.service';

describe('LoadMsgService', () => {
  let service: LoadMsgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadMsgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
