import { Component, OnInit, OnDestroy } from '@angular/core';
import { NGXLogger } from "ngx-logger";
import { Subscription } from "rxjs/Subscription";

import { UserInfo } from "../learning/shared/services/user-info.object";
import { User } from "../learning/shared/model/user.info";

@Component({
  selector: 'module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.scss']
})
export class ModuleComponent implements OnInit, OnDestroy {

  mobile : string = '1111111';
  name : string = 'John';

  userSubscription : Subscription;

  constructor(private _logger : NGXLogger, private _user : UserInfo) { }

  ngOnInit() {
  }

  showUser(){
    this.userSubscription = this._user.changes.subscribe(data => {
      this.name = data.firstName;
      this.mobile = data.mobile;
    });
  }

  ngOnDestroy() {
    if(!!this.userSubscription) this.userSubscription.unsubscribe();
  }
}
