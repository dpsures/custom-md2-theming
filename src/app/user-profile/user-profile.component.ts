import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material";
import { BreakPointObserverService } from "../shared/services/breakpoint.service";
import { ModuleDetailsService } from "../module-details/module-details.service";
import { NGXLogger } from "ngx-logger";
import { Module } from "../shared/model/module";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  topPosition : any;
  rightPosition : any;

  _modules : Module[];

  constructor(private _dialogRef : MatDialogRef<UserProfileComponent>, private _breakObserver : BreakPointObserverService,
    private _logger : NGXLogger, private _moduleService : ModuleDetailsService) { 
  }

  ngOnInit() {
    this._breakObserver.currentDevice.subscribe(device => {
      //console.log('create tutorial device ----->'+device.isMobile + ' ---- '+device.isTablet+' ----- '+device.isDesktop);
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

      this._dialogRef.updateSize('300px','300px');
    });
    this._logger.info('ngoninit in user dialog called');
    this.getCurrentModules();
  }

  getCurrentModules(){
    this._moduleService.getModules()
    .subscribe(data => {
      this._modules = data;
      this._logger.info('current modules in user dialog ---->'+JSON.stringify(this._modules));
    });
  }
}
