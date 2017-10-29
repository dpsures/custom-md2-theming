import { Component, OnInit, OnChanges, Optional } from '@angular/core';
import { NGXLogger } from "ngx-logger";
import { ProgramDetailsService } from "./program-details.service";
import { Module } from "../shared/model/module";
import { Course } from "../shared/model/course";
import { ModuleSubject } from "./program-details.subject";
import { ModuleConstants } from "../shared/constants/module.const";

@Component({
  selector: 'program-details',
  templateUrl: './program-details.component.html',
  styleUrls: ['./program-details.component.scss']
})
export class ProgramDetailsComponent implements OnInit, OnChanges {

  constructor(private _programServices : ProgramDetailsService, private _logger : NGXLogger,
  private _moduleSubject : ModuleSubject) { 
      _logger.info('constructor called');
  }

  ngOnChanges(): void {
    this._logger.info('ngonchange called');
  }

  ngOnInit() {
    this._logger.info('ngoninit called');
    this._programServices.getModuleDetails()
    .subscribe(response => {
      this._moduleSubject.setdata(response);
      this.getModules();      
      /* if(modules instanceof Array){
        this._logger.info('instance of array ---->'+true);
        modules.forEach(function(module){
          this._logger.info(JSON.stringify(module));
        });
      }*/

    });
  }

  getModules(){
    this._logger.info('modules details in program details ---->'+JSON.stringify(this._moduleSubject.getdata()));
    //this._moduleSubject.getdata().push(this.getNewModule());
  }
}
