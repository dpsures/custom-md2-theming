import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from "rxjs/Subject";
import { Observable } from "rxjs/Observable";
import { Module } from "../shared/model/module";
import { Subscription } from "rxjs/Subscription";
import { map, RxChain, startWith } from '@angular/cdk/rxjs';

@Injectable()
export class ModuleDetailsService {

    private _data : Subject<Module[]> = new Subject<Module[]>();

    private _renderData = new Subject<Module[]>();

    _renderChangesSubscription: Subscription;

    constructor(private _http : HttpClient) {
        this._updateChangeSubscription();
     }
    
    getModules() : Observable<Module[]> {
        return this._data.asObservable();
    }

    setModules(data : Module[]){
        return this._data.next(data);
    }

    getModuleDetails() : Observable<Module[]>{
        return this._http.get<Module[]>('/assets/json/angular-modules.json');
    }

    _updateChangeSubscription(){
        if (this._renderChangesSubscription) { 
            this._renderChangesSubscription.unsubscribe(); 
        }

        this._renderChangesSubscription = RxChain.from(this._data)
        .subscribe(data => this._renderData.next(data));

    }
}