import { TestBed } from '@angular/core/testing';

import { selectedChat } from './selected-chat.service';

describe('SelectedChatService', () => {
  let service: selectedChat;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(selectedChat);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
