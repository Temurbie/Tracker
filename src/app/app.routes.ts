import { Routes } from '@angular/router';
import { Main } from './features/layout/main/main';
import { Login } from './features/page/login/login';
import { ExpenseLayout } from './features/layout/expense-layout/expense-layout';
import { AllTransactions } from './features/page/all-transactions/all-transactions';
import { About } from './features/components/about/about';
import { Comunication } from './features/components/comunication/comunication';

export const routes: Routes = [
    {
        path:"", pathMatch:'full', component:Main
    },
    {
        path: "login", component: Login
    },
    {
        path: 'expense' , component: ExpenseLayout
    },
    {
        path:'all', component: AllTransactions
    },
    {
        path: 'about', component: About
    },
    {
        path: 'comunication', component: Comunication
    },
   
];
