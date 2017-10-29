import { Component, OnInit, OnDestroy } from '@angular/core';
import { NGXLogger } from "ngx-logger";
import { Subscription } from "rxjs/Subscription";

import { ModuleHomeService } from "../module-home/module-home.service";
import { Module } from "../../shared/model/module";
import { Course } from "../../shared/model/course";

import { ModulesPagination } from "../shared/subject/modules.subject";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit, OnDestroy {

  _modulesMap : Map<number, Module> = new Map<number, Module>();

  _moduleWatcher : Subscription;

  _next : number = 0;
  _previous : number = 0;
  _current : number = 0;
  _total : number = 0;

  constructor(private _logger : NGXLogger, private _moduleService : ModuleHomeService,
  private _moduleSubject : ModulesPagination) { }

  ngOnInit() {
    this.showModuleDetails();
  }

  showModuleDetails(){    

    this._moduleWatcher = this._moduleService.getModules()
    .subscribe(modules => {

      for(let mod of modules){
       this._modulesMap.set(mod.sequenceNbr, mod);
      }

      if(this._modulesMap.size > 0 && this._next == 0 && this._previous == 0){
        this._current = 1;
      }

      if(this._modulesMap.size > 0){
        this._total = this._modulesMap.size;
      }

      this._modulesMap.forEach(function(value, key){
        //console.log('key --->'+key);
        //console.log('value --->'+JSON.stringify(value));
      });

      for(let mod of Array.from(this._modulesMap.entries())){
        //this._logger.info('mdo -------->'+JSON.stringify(mod));
      }

      let currentModule : Module = this._modulesMap.get(1);
      //this._logger.info('currentModule ----->'+currentModule);
      this._moduleSubject.setModule(currentModule);

      this.getNextValue(this._current);
      this.showNext();
      this.showPrevious();
      this._logger.info("this.showPrevious() --->"+this.showPrevious());
    });
  }

  showPrevious(){
    return !(this._previous == 0);
  }

  showNext(){
    this._logger.info('this._current >= this._modulesMap.size ----->'+(this._current >= this._modulesMap.size));
    this._logger.info('this._current == 0 ----->'+(this._current == 0));
    this._logger.info('this._next == 0 ----->'+(this._next == 0));
    this._logger.info('((this._next == 0) && (this._current == 0) && !(this._current >= this._modulesMap.size)) --->'+!((this._next == 0) && (this._current == 0) && !(this._current >= this._modulesMap.size)));
    return !((this._next == 0) && (this._current == 0) && !(this._current >= this._modulesMap.size));
  }

  getNextValue(currentSeq : number){
    this._next = currentSeq;
    if(currentSeq > this._modulesMap.size){
      this._next = this._next + 1;
    }
    return this._next;
  }

  getPreviousValue(currentSeq : number){

  }

  ngOnDestroy() {
    if(!!this._moduleWatcher) this._moduleWatcher.unsubscribe();
  }

}
