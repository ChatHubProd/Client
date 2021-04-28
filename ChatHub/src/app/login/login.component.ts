import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  nick: string;
  pass: string;
  loginObs : Observable<object>;
  result: any;
  logged: boolean;

  constructor(private auth: AuthService, private user: UserService,public router: Router) { }

  submit(nick: HTMLInputElement, pass: HTMLInputElement)
  {
    this.nick = nick.value;
    this.pass = pass.value;
    this.loginObs = this.auth.login(this.nick, this.pass);
    this.loginObs.subscribe(this.getData);
  }

  getData = (data) =>
  {
    this.result = data;
    console.log(this.result);
    if(this.result.logedin == true)
    {
      this.user.newUser(this.result);
      this.logged = true;
      console.log(this.logged);
      this.router.navigate(['/home']);
    }else
    {
      this.logged = false;
      console.log(this.logged);
    }

  }



  ngOnInit(): void {
    this.user.sharedUserInfo.subscribe(message => this.result = message)
  }

}
