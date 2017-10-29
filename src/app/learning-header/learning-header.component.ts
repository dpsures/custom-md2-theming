import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs/Subscription";
import { NGXLogger } from "ngx-logger";

import { UserInfo } from "../learning/shared/services/user-info.object";
import { User } from "../learning/shared/model/user.info";

@Component({
  selector: 'learning-header',
  templateUrl: './learning-header.component.html',
  styleUrls: ['./learning-header.component.scss']
})
export class LearningHeaderComponent implements OnInit, OnDestroy {

  name : string = "John";
  userSubscription : Subscription;
  
  constructor(private _logger : NGXLogger, private _user : UserInfo) { }

  ngOnInit() {
    this.userSubscription = this._user.changes.subscribe(data => {
      this.name = data.firstName;
    });
  }


  ngOnDestroy() {
    if(!!this.userSubscription) this.userSubscription.unsubscribe();
  }

}
