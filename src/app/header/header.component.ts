import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from "@angular/material";
import { UserProfileComponent } from "../user-profile/user-profile.component";
import { Language } from "../shared/model/language";

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  selectedLanguage : string = '101';

  languages : Language[] = [
    {languageId : '101', languageTxt : 'English'},
    {languageId : '102', languageTxt : 'Spanish'},
    {languageId : '103', languageTxt : 'Franch'}
  ];

  constructor(private _dialog : MatDialog) { }

  ngOnInit() {
  }

  openUserProfile(){
    this._dialog.open(UserProfileComponent);
  }

}
