import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  result : any = undefined;
  visible: string = "visible";

  constructor(private user : UserService) { }

  onActivate(event: any): void {
    console.log("git it");
  }


  hide()
  {
    this.visible = "hide"
  }

  ngOnInit(): void {
    this.user.sharedUserInfo.subscribe(message => this.result = message)
  }

}
