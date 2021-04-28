import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  result: any;
  defImg: string = "assets/proPic.jpg";

  constructor(private user: UserService) { }


  ngOnInit(): void {
    this.user.sharedUserInfo.subscribe(message => this.result = message)
  }

}
