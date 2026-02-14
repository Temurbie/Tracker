import { Injectable, signal } from "@angular/core";
import { IUser } from "../interface/user.interface";

@Injectable({
    providedIn: 'root'
})

export class UserService{
    private KEY: string = 'USER';
    public isUserLogined = signal<boolean>(false)
    public currentUser = signal<IUser | null>(null)

    constructor(){
        console.log(this.currentUser());
        this.getUserInLocal();
        
    }


    getUserInLocal(){
        const raw = localStorage.getItem(this.KEY);
        if(!raw) return;

        const user: IUser = JSON.parse(raw);
        this.currentUser.set(user);
        this.isUserLogined.set(true)
    }

    loginUser(user:IUser){
        localStorage.setItem(this.KEY, JSON.stringify(user));
        this.isUserLogined.set(true);
        this.currentUser.set(user)
    }

    logOutUser(){
        localStorage.removeItem(this.KEY);
        this.isUserLogined.set(false)
    }
}