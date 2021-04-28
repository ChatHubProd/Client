import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private search = new BehaviorSubject(undefined);
  activeSearch = this.search.asObservable();

  constructor() { }

  searchActive(active: boolean)
  {
    this.search.next(active);
  }

}
