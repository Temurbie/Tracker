import { Routes } from '@angular/router';
import { Main } from './features/layout/main/main';

export const routes: Routes = [
    {
        path:"", pathMatch:'full', component:Main
    }
];
