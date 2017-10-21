import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Device } from "../model/device";

@Injectable()
export class BreakPointObserverService {

    public _device = new Device(false,false,false,null);
    public _deviceSource = new BehaviorSubject(this._device);

    currentDevice = this._deviceSource.asObservable();

    constructor() {
     }

     currentDeviceState(device : Device) {
        console.log('device ----->'+device.isMobile + ' ---- '+device.isTablet+' ----- '+device.isDesktop);
        this._deviceSource.next(device);
     }
}