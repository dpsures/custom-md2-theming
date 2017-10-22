import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { BreakPointObserverService } from "./shared/services/breakpoint.service";
import { Device } from "./shared/model/device";
import { ObservableMedia, MediaChange } from "@angular/flex-layout";

@Component({
  selector: 'trainer',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  constructor(private _router : Router, private _breakPointObserver : BreakpointObserver, 
    private _breakObserver : BreakPointObserverService, private _obserMedia : ObservableMedia){

    _breakPointObserver.observe('(max-width: 599px)')
    .subscribe(res => {
      if(res.matches){
        console.log('mobile device');
        _obserMedia.subscribe((media : MediaChange) => {
          console.log('media change ------>'+media.mqAlias+' ----- '+media.mediaQuery+' ----- '+media.property+' ----- '+media.suffix+' ----- '+media.value)
          _breakObserver.currentDeviceState(new Device(true,false,false,media));
        });
      }
    });

    _breakPointObserver.observe('(min-width: 600px) and (max-width: 1279px)')
    .subscribe(res => {
      if(res.matches){
        console.log('tablet device');
        _obserMedia.subscribe((media : MediaChange) => {
          console.log('media change ------>'+media.mqAlias+' ----- '+media.mediaQuery+' ----- '+media.property+' ----- '+media.suffix+' ----- '+media.value)
          _breakObserver.currentDeviceState(new Device(false,true,false,media));
        });
      }
    });

    _breakPointObserver.observe('(min-width: 1280px)')
    .subscribe(res => {
      if(res.matches){
        console.log('web desktop device');
        _obserMedia.subscribe((media : MediaChange) => {
          console.log('media change ------>'+media.mqAlias+' ----- '+media.mediaQuery+' ----- '+media.property+' ----- '+media.suffix+' ----- '+media.value)
          _breakObserver.currentDeviceState(new Device(false,false,true,media));
        }); 
      }
    });
  }

  ngOnInit() {
    this._router.navigate(['/landing']);
  }
}
