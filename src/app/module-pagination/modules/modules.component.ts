import { Component, OnInit, OnDestroy } from '@angular/core';
import { NGXLogger } from "ngx-logger";
import { Subscription } from "rxjs/Subscription";

import { ModulesPagination } from "../shared/subject/modules.subject";
import { Module } from "../../shared/model/module";
import { Course } from "../../shared/model/course";

@Component({
  selector: 'modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.scss']
})
export class ModulesComponent implements OnInit, OnDestroy {

  _moduleSubscription : Subscription;
  _currentModule : Module = new Module();

  constructor(private _logger : NGXLogger, private _moduleSubject : ModulesPagination) { }

  ngOnInit() {
    this._moduleSubscription = this._moduleSubject._changes.subscribe(currentModule => {
      if(currentModule != null){
        this._currentModule = currentModule;
        this._logger.info('first module ---->'+JSON.stringify(this._currentModule));
      }
    });
  }

  ngOnDestroy() {
    if(!!this._moduleSubscription) this._moduleSubscription.unsubscribe();
  }
}
