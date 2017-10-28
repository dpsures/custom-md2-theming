import { Injectable, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { Module } from "../shared/model/module";

@Injectable()
export class ProgramDetailsService {

    constructor(private _http : HttpClient) {}    

    getModuleDetails() : Observable<Module[]>{
        return this._http.get<Module[]>('/assets/json/angular-modules.json');
    }
}