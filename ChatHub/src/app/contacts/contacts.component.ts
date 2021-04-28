import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { selectedChat } from '../selected-chat.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  result: any;
  defImg: string = "assets/proPic.jpg";
  userObs: Observable<object>;
  chats: Array<any>;

  constructor(private user: UserService, private chat : selectedChat) { }

  choose(Schat: HTMLLabelElement)
  {
    this.chat.newSelectedChat(Schat);
    console.log(Schat);
  }


  getData = (data) =>
  {
    this.result = data;
    console.log(this.result);
    this.chats = this.result.contacts;
    this.user.newUser(this.result);
  }

  ngOnInit(): void {
    this.user.sharedUserInfo.subscribe(message => this.result = message)
    this.userObs = this.user.userinfo(this.result.nickname);
    this.userObs.subscribe(this.getData);
    
  }

}
