import { Component, OnInit, OnDestroy } from '@angular/core';
import { NGXLogger } from "ngx-logger";
import { Subscription } from "rxjs/Subscription";
import { UserInfo } from "../learning/shared/services/user-info.object";
import { User } from "../learning/shared/model/user.info";

@Component({
  selector: 'app-learning-home',
  templateUrl: './learning-home.component.html',
  styleUrls: ['./learning-home.component.scss']
})
export class LearningHomeComponent implements OnInit, OnDestroy {

  userSubscription : Subscription;

  constructor(private user : UserInfo, private _logger : NGXLogger) { 
    this.userSubscription = user.changes.subscribe(data => {
      _logger.info('user obj ----->'+JSON.stringify(data));
    });

    let userObj = user.getUser();
    if(userObj == null){
      userObj = new User();
    }
    userObj.userId = "LMT0001";
    user.setUser(userObj);
  }

  ngOnInit() {
    this.userSubscription = this.user.changes.subscribe(data => {
      this._logger.info('user obj after first emit ----->'+JSON.stringify(data));
    });

    let usr = this.user.getUser();
    usr.firstName = "Suresh Kumar Devaraj";
    this.user.setUser(usr);
  }

  ngOnDestroy() {
    if(!!this.userSubscription) this.userSubscription.unsubscribe(); 
  }
}
