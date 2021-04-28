import { Component, OnInit } from '@angular/core';
import { selectedChat } from '../selected-chat.service';

@Component({
  selector: 'app-active-user',
  templateUrl: './active-user.component.html',
  styleUrls: ['./active-user.component.css']
})
export class ActiveUserComponent implements OnInit {
  user : string;

  constructor(private chat : selectedChat) { }

  ngOnInit(): void {
    this.chat.sharedSelectedChat.subscribe(message => this.user = message)
  }

}
