import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpHeaders, HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoadMsgService {


  constructor(private http: HttpClient) { }
  loadold(cnl : string)
  {
    const url = `https://3000-salmon-horse-a70kyozz.ws-eu04.gitpod.io/requestoldmsg/${cnl}`
    return this.http.get(url);
  }
}
