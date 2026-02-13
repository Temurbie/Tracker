import { Routes } from '@angular/router';
import { Main } from './features/layout/main/main';
import { Login } from './features/page/login/login';

export const routes: Routes = [
    {
        path:"", pathMatch:'full', component:Main
    },
    {
        path: "login", component: Login
    }
];
