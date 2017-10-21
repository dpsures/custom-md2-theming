import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material";
import { UserProfileComponent } from "../user-profile/user-profile.component";

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _dialog : MatDialog) { }

  ngOnInit() {
  }

  openUserProfile(){
    this._dialog.open(UserProfileComponent);
  }

}
