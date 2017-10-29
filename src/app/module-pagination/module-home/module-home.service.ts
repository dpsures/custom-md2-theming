import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";

import { Module } from "../../shared/model/module";
import { Course } from "../../shared/model/course";

@Injectable()
export class ModuleHomeService {

    constructor(private _http : HttpClient) { }    

    getModules() : Observable<Module[]>{
        return this._http.get<Module[]>('/assets/json/angular-modules.json');
    }
}