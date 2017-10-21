import { Component, OnInit } from '@angular/core';
import { BreakPointObserverService } from "../shared/services/breakpoint.service";

@Component({
  selector: 'create-tutorial',
  templateUrl: './create-tutorial.component.html',
  styleUrls: ['./create-tutorial.component.css']
})
export class CreateTutorialComponent implements OnInit {

  constructor(private _breakObserver : BreakPointObserverService) { }

  ngOnInit() {
    this._breakObserver.currentDevice.subscribe(device => {
      console.log('create tutorial device ----->'+device.isMobile + ' ---- '+device.isTablet+' ----- '+device.isDesktop);
    });
  }

}
