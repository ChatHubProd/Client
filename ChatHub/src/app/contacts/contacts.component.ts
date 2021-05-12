import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { selectedChat } from '../selected-chat.service';
import { SocketService } from '../socket-service.service';
import { UserService } from '../user.service';
import { SearchContactsService } from '../search-contacts.service';

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
  channels: Array<string>;
  cnl: string;
  contacts: Array<string>;

  constructor(private user: UserService, private chat : selectedChat, private socketService: SocketService, private searchContacts: SearchContactsService) { }

  choose(Schat: HTMLLabelElement)
  {
    this.chat.newSelectedChat(Schat);
    this.channels = [Schat.innerText , this.result.nickname];
    this.channels.sort();
    this.cnl = this.channels[0] + this.channels[1];
    console.log(this.cnl);
    this.socketService.changeChannel(this.result.nickname, this.cnl);

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


    this.searchContacts.sharedSearchContacts.subscribe(message1 => this.contacts = message1);
  }

}
