import { Component } from '@angular/core';
import { Dashboard } from "../../components/dashboard/dashboard";
import { Expense } from "../../components/expense/expense";
import { TranisctionForm } from "../../components/tranisction-form/tranisction-form";

@Component({
  selector: 'app-expense-layout',
  imports: [Dashboard, Expense, TranisctionForm],
  templateUrl: './expense-layout.html',
  styleUrl: './expense-layout.css',
})
export class ExpenseLayout {

}
