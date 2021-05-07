import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpHeaders, HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class selectedChat {

  private selectedChat = new BehaviorSubject(undefined);
  sharedSelectedChat = this.selectedChat.asObservable();
  constructor(private http: HttpClient) { }

  selectedchat(nick: string)
  {
    const url = `https://3000-salmon-galliform-fv85ugfv.ws-eu03.gitpod.io/userInfo/${nick}`
    return this.http.get(url);
  }

  newSelectedChat(user: any)
  {
    this.selectedChat.next(user);
  }

}
