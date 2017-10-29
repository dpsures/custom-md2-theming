import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { User } from "../model/user.info";

const userInfo = new BehaviorSubject<User>(null);

export class UserInfo {
    user = userInfo;

    changes = userInfo.asObservable();

    getUser(){
        return this.user.value;
    }

    setUser(data : User){
        this.user.next(data);
    }
}