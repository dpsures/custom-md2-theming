import { Component, OnInit } from '@angular/core';
import { NGXLogger } from "ngx-logger";
import { Router } from "@angular/router";

import { ModuleHomeService } from "./module-home.service";
import { Module } from "../../shared/model/module";
import { Course } from "../../shared/model/course";

@Component({
  selector: 'app-module-home',
  templateUrl: './module-home.component.html',
  styleUrls: ['./module-home.component.scss']
})
export class ModuleHomeComponent implements OnInit {

  constructor(private _logger : NGXLogger, private _moduleService : ModuleHomeService,
  private _router : Router) { }

  ngOnInit() {
  }

  showAngularModules(){
    let _modulesMap : Map<string, Module> = new Map<string, Module>();

    this._moduleService.getModules()
    .subscribe(modules => {

      for(let mod of modules){
        //this._logger.info('module ids are ---->'+JSON.stringify(mod.moduleID));
        _modulesMap.set(mod.moduleID, mod);
      }

      //this._logger.info('module -->'+JSON.stringify(_modulesMap.get("part-1")));

      _modulesMap.forEach(function(value, key){
        //console.log('key --->'+key);
        //console.log('value --->'+JSON.stringify(value));
      });

      for(let mod of Array.from(_modulesMap.entries())){
        //this._logger.info('mdo -------->'+JSON.stringify(mod));
      }

      this._router.navigate(['/module/details']);
    });
  }
}
