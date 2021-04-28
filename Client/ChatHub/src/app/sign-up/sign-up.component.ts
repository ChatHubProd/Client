import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  nick: string;
  pass: string;
  quest: string;
  answr: string;
  signObs : Observable<object>;
  result: any;


  constructor(private auth: AuthService) { }

  submit(nick: HTMLInputElement, pass: HTMLInputElement, quest: HTMLInputElement, answr: HTMLInputElement)
  {
    this.nick = nick.value;
    this.pass = pass.value;
    this.quest = quest.value;
    this.answr = answr.value;

    this.signObs = this.auth.signUp(this.nick, this.pass, this.quest, this.answr);
    this.signObs.subscribe(this.getData);
  }

  getData = (data) =>
  {
    this.result = data;
    console.log(this.result);
  }





  ngOnInit(): void {
  }

}
