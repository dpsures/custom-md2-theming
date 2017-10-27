import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Module } from "../shared/model/module";

@Injectable()
export class ProgramDetailsService {

    private _moduleDataSource = new BehaviorSubject(null);

    constructor(private _http : HttpClient) { }    

    getModuleDetails() : Observable<Module[]>{
        return this._http.get<Module[]>('/assets/json/angular-modules.json');
    }

    updateModuleDetails(modules : Module[]){
        this._moduleDataSource.next(modules);
    }

    getModules() : Observable<Module[]> {
        return this._moduleDataSource.asObservable();
    }
}