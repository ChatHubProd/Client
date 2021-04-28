import { Component, OnInit } from '@angular/core';
import { selectedChat } from '../selected-chat.service';
import { SocketService } from '../socket-service.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messageList:  object[] = [];
  message: any;
  result: any;
  activeUser: string;
  cnl: Array<string>;
  channel : string;

  constructor(private socketService: SocketService, private user: UserService,private chat : selectedChat) { }

  sendMessage(message: HTMLInputElement) {
    this.cnl = [this.activeUser , this.result.nickname];
    this.cnl.sort();
    this.channel = this.cnl[0] + this.cnl[1];
    this.message = {"user": this.result.nickname, "message": message.value, "channel": this.channel};
    this.socketService.sendMessage(this.result.nickname, message.value, this.channel);

    console.log("sent: " + this.message)
    message.value="";
    this.message = {};
  }
  ngOnInit() {
    this.socketService.getMessage()
    .subscribe((message: object) => {
        this.messageList.push(message);
        console.log("messagereceived: " + message)
      });
      this.user.sharedUserInfo.subscribe(message => this.result = message)
      this.chat.sharedSelectedChat.subscribe(message1 => this.activeUser = message1)
    }
}
