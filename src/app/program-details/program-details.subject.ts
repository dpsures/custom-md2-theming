import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Subscription } from "rxjs/Subscription";
import { map, RxChain, startWith } from '@angular/cdk/rxjs';
import { Module } from "../shared/model/module";

@Injectable()
export class ModuleSubject {

    private _data: BehaviorSubject<Module[]> = new BehaviorSubject<Module[]>(null);

    private _renderData = new BehaviorSubject<Module[]>([]);

    _renderChangesSubscription: Subscription;

	constructor() {
        this._updateChangeSubscription();
	}
    
    setdata(data: Module[]) { 
        this._data.next(data); 
    }

    getdata() { 
        return this._data.value; 
    }

    _updateChangeSubscription(){
        if (this._renderChangesSubscription) { 
            this._renderChangesSubscription.unsubscribe(); 
        }

        this._renderChangesSubscription = RxChain.from(this._data)
        .subscribe(data => this._renderData.next(data));

    }
}