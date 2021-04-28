import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(nick: string, pass: string)
  {
    const url = `https://3000-scarlet-sturgeon-358ad7wk.ws-eu03.gitpod.io/users/${nick}/${pass}`
    return this.http.get(url);
  }

  signUp(nick: string, pass: string, quest: string, answr:string)
  {
    const url = `https://3000-scarlet-sturgeon-358ad7wk.ws-eu03.gitpod.io/signup/${nick}/${pass}/${quest}/${answr}`
    return this.http.get(url);
  }


}
