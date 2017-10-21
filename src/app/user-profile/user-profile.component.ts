import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material";
import { BreakPointObserverService } from "../shared/services/breakpoint.service";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  topPosition : any;
  rightPosition : any;

  constructor(private _dialogRef : MatDialogRef<UserProfileComponent>, private _breakObserver : BreakPointObserverService) { 

  }

  ngOnInit() {
    this._breakObserver.currentDevice.subscribe(device => {
      console.log('create tutorial device ----->'+device.isMobile + ' ---- '+device.isTablet+' ----- '+device.isDesktop);
      if(device.isMobile){
        this.topPosition = 105;
        this.rightPosition = 85;
      }else if(device.isTablet){
        if(device.activeMedia.mqAlias == 'sm'){
          this.topPosition = 105;
          this.rightPosition = 85;
        }else if(device.activeMedia.mqAlias == 'md'){
          this.topPosition = 55;
          this.rightPosition = 85;
        }
      }else if(device.isDesktop){
        this.topPosition = 55;
        this.rightPosition = 85;
      }

      this._dialogRef.updatePosition({top: this.topPosition+'px',right: this.rightPosition+'px'});
    });
  }

}
