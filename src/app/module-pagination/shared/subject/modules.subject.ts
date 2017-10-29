import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Module } from "../../../shared/model/module";

export class ModulesPagination {

    _module = new BehaviorSubject<Module>(null);

    _changes = this._module.asObservable();

    getModule(){
        return this._module.value;
    }

    setModule(data : Module){
        this._module.next(data);
    }
}