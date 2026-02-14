import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule, DatePipe, CurrencyPipe } from '@angular/common';
import { TrasictionSerivce } from '../../../shared/services/transiction.service';
import { transctionType } from '../../../shared/interface/transcition.interface';


type FilterType = 'all' | transctionType;
@Component({
  selector: 'app-all-transactions',
  imports: [CommonModule, DatePipe, CurrencyPipe],
  templateUrl: './all-transactions.html',
  styleUrl: './all-transactions.css',
})
export class AllTransactions {

  private tr = inject(TrasictionSerivce);

  transactions = this.tr.trnasictions;
  incomeAmount = this.tr.incomeAmount;
  expenseAmount = this.tr.expenseAmount;
  balance = this.tr.balance;

  filter = signal<FilterType>('all');
  query = signal('');

  filtered = computed(() => {
    const list = this.transactions();
    const f = this.filter();
    const q = this.query().trim().toLowerCase();

    return list
      .filter(t => (f === 'all' ? true : t.type === f))
      .filter(t => {
        if (!q) return true;
        const cat = (t.catigory ?? '').toLowerCase();
        const com = (t.comment ?? '').toLowerCase();
        const pay = (t.paymentMethod ?? '').toLowerCase();
        return cat.includes(q) || com.includes(q) || pay.includes(q);
      });
  });

  remove(id: string) {
    this.tr.remove(id);
  }

}
