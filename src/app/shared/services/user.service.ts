import { Injectable } from "@angular/core";
import { IUser } from "../interface/user.interface";

@Injectable({
    providedIn: 'root'
})

export class UserService{
    private KEY: string = 'USER';


    loginUser(user:IUser){
        localStorage.setItem(this.KEY, JSON.stringify(user));
    }

    logOutUser(){
        localStorage.removeItem(this.KEY)
    }
}