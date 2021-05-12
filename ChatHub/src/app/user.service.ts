import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpHeaders, HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userInfo = new BehaviorSubject(undefined);
  sharedUserInfo = this.userInfo.asObservable();
  constructor(private http: HttpClient) { }

  userinfo(nick: string)
  {
    const url = `https://3000-gold-otter-mjynmqyr.ws-eu04.gitpod.io/userInfo/${nick}`
    return this.http.get(url);
  }

  getContacts(nick : string)
  {
    const url = `https://3000-gold-otter-mjynmqyr.ws-eu04.gitpod.io/contacts/${nick}`
    return this.http.get(url);
  }

  newUser(user: any)
  {
    this.userInfo.next(user);
  }

}
