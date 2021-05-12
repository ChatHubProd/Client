import { Component, OnInit } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { UserService } from '../user.service';
import { SearchContactsService } from '../search-contacts.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  active: boolean;
  search: string;
  users: Array<string>;
  userObs : Observable<Object>;

  constructor(private userService: UserService, private searchContacts: SearchContactsService) { }

  onActivate(search: HTMLInputElement){
    if(search.value != "")
    {
      this.search = search.value;
      console.log(this.search);
      this.active = true;

      this.userObs = this.userService.getContacts(this.search);
      this.userObs.subscribe(this.getData);
    }
  }

  getData = (data) =>
  {
    this.users = [];
    for(var i = 0; i < data.length;  i++)
    {
      this.users = data[0].nickname;
    }

    this.searchContacts.newSearched(this.users);


    console.log(this.users);

  }


  ngOnInit(): void {
  }

}
