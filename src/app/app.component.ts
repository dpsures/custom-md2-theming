import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { BreakPointObserverService } from "./shared/services/breakpoint.service";
import { Device } from "./shared/model/device";
import { ObservableMedia, MediaChange } from "@angular/flex-layout";
import { NGXLogger } from "ngx-logger";

@Component({
  selector: 'trainer',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  constructor(private _router : Router, private _breakPointObserver : BreakpointObserver, 
    private _breakObserver : BreakPointObserverService, private _obserMedia : ObservableMedia,
  private _logger : NGXLogger){

    _breakPointObserver.observe('(max-width: 599px)')
    .subscribe(res => {
      if(res.matches){
        _obserMedia.subscribe((media : MediaChange) => {
          _breakObserver.currentDeviceState(new Device(true,false,false,media));
        });
      }
    });

    _breakPointObserver.observe('(min-width: 600px) and (max-width: 1279px)')
    .subscribe(res => {
      if(res.matches){
        _obserMedia.subscribe((media : MediaChange) => {
          _breakObserver.currentDeviceState(new Device(false,true,false,media));
        });
      }
    });

    _breakPointObserver.observe('(min-width: 1280px)')
    .subscribe(res => {
      if(res.matches){
        _obserMedia.subscribe((media : MediaChange) => {
          _breakObserver.currentDeviceState(new Device(false,false,true,media));
        }); 
      }
    });
  }

  ngOnInit() {
    this._router.navigate(['/learning/home']);
  }
}
