import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material";
import { CreateTutorialComponent } from "../create-tutorial/create-tutorial.component";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _dialog : MatDialog) { }

  ngOnInit() {
  }

  createTutorialDialog(){
    this._dialog.open(CreateTutorialComponent);
  }
}
