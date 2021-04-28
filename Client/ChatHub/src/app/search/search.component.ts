import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  active: boolean;
  search: string;

  constructor() { }

  onActivate(search: HTMLInputElement){
    this.search = search.value;
    console.log(this.search);
    this.active = true;
  }


  ngOnInit(): void {
  }

}
