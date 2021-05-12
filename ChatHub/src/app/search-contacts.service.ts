import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchContactsService {

  constructor() { }

  private searchContacts = new BehaviorSubject(undefined);
  sharedSearchContacts = this.searchContacts.asObservable();

  newSearched(users: any)
  {
    this.searchContacts.next(users);
  }

}
