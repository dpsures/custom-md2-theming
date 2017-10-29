import { Component, OnInit } from '@angular/core';
import { ModuleDetailsService } from "./module-details.service";
import { Module } from "../shared/model/module";
import { Course } from "../shared/model/course";
import { NGXLogger } from "ngx-logger";

@Component({
  selector: 'module-details',
  templateUrl: './module-details.component.html',
  styleUrls: ['./module-details.component.scss']
})
export class ModuleDetailsComponent implements OnInit {

  _modules : Module[];

  constructor(private _moduleService : ModuleDetailsService,
  private _logger : NGXLogger) { }

  ngOnInit() {
    this._moduleService.getModuleDetails()
    .subscribe(data => {
      this._moduleService.setModules(data);
      this._modules = data;
      this.currentModules();
    });
  }

  currentModules(){
    this._logger.info(JSON.stringify(this._modules));
  }

  addModule(){
    this._logger.info('add new module method called');
    this._moduleService.getModules()
    .subscribe(data => {
      this._modules = data;
      this._modules.push(this.getNewModule());
      this._moduleService.setModules(this._modules);
    });
  }

  getNewModule() : Module{
    let module = new Module();
    module.$moduleID = "Part - 4";
    module.$moduleName = "RXJS - With Angular 4";
    let course = new Course("RxJS - Subject", "15 mins", "Not yet start");
    module.$courses = course;
    return module;
  }
}
