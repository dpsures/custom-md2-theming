import { Component, OnInit, OnDestroy } from '@angular/core';
import { NGXLogger } from "ngx-logger";
import { Subscription } from "rxjs/Subscription";

import { UserInfo } from "../learning/shared/services/user-info.object";
import { User } from "../learning/shared/model/user.info";

@Component({
  selector: 'course-module',
  templateUrl: './course-module.component.html',
  styleUrls: ['./course-module.component.scss']
})
export class CourseModuleComponent implements OnInit, OnDestroy {

  userSubscription : Subscription;

  constructor(private _logger : NGXLogger, private _user : UserInfo) { }

  ngOnInit() {
  }

  showDetails(){
    this._logger.info('show details in course module component called');
    let userObj = this._user.getUser();
    userObj.firstName = "Logesh M";
    userObj.mobile = "6985745632";
    this._user.setUser(userObj);
  }


  ngOnDestroy() {
    
  }
}
