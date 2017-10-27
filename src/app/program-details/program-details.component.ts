import { Component, OnInit } from '@angular/core';

import { ProgramDetailsService } from "./program-details.service";

@Component({
  selector: 'program-details',
  templateUrl: './program-details.component.html',
  styleUrls: ['./program-details.component.scss']
})
export class ProgramDetailsComponent implements OnInit {

  constructor(private _programServices : ProgramDetailsService) { 
     
  }

  ngOnInit() {
    this._programServices.getModuleDetails()
    .subscribe(modules => {
      this._programServices.updateModuleDetails(modules);
      this.getModules();
    });
  }

  getModules(){
    console.log(JSON.stringify(this._programServices.getModules()));
  }
}
