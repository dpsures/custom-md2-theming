import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { User } from "../model/user.info";

export class UserInfo {
    user =  new BehaviorSubject<User>(null);

    changes = this.user.asObservable();

    getUser(){
        return this.user.value;
    }

    setUser(data : User){
        this.user.next(data);
    }
}