import { Component, OnInit, OnDestroy } from '@angular/core';
import { NGXLogger } from "ngx-logger";
import { UserInfo } from "../learning/shared/services/user-info.object";
import { User } from "../learning/shared/model/user.info";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit, OnDestroy {

  id : string;
  name : string;
  mobile : string;

  userSubscription : Subscription;

  constructor(private _logger : NGXLogger, private _userService : UserInfo) {
    this.userSubscription = _userService.changes.subscribe(data => {
      this.id = data.userId;
      this.name = data.firstName;
      this.mobile = data.mobile;
    });
   }

  ngOnInit() {
  }

  ngOnDestroy() {
    if(!!this.userSubscription) this.userSubscription.unsubscribe();
  }
}
