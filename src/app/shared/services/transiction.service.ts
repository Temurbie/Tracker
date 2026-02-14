import { computed, effect, Injectable, signal } from "@angular/core";
import { ITransction } from "../interface/transcition.interface";

@Injectable({ providedIn: 'root' })
export class TrasictionSerivce {
  private readonly KEY = 'TRANSACTIONS_V1';

  private _transictions = signal<ITransction[]>(this.load());
  trnasictions = this._transictions.asReadonly();

  allTransictionAmount = computed(() =>
    this._transictions().reduce((sum, t) => sum + t.amount, 0)
  )
  incomeAmount = computed(() =>
    this._transictions()
      .filter(t => t.type === 'income')
      .reduce((sum, t) => sum + t.amount, 0)
  )
  expenseAmount = computed(() =>
    this._transictions()
      .filter(t => t.type === 'expense')
      .reduce((sum, t) => sum + t.amount, 0)
  )
  balance = computed(() => this.incomeAmount() - this.expenseAmount());
  last5 = computed(() => this._transictions().slice(0, 5)); 

  constructor() {
    effect(() => {
      localStorage.setItem(this.KEY, JSON.stringify(this._transictions()));
    });
  }

  add(t: ITransction) {
    this._transictions.update(cur => [t, ...cur]); 
  }

  remove(id: string) {
    this._transictions.update(cur => cur.filter(x => x.id !== id));
  }

  clear() {
    this._transictions.set([]);
  }

  private load(): ITransction[] {
    try {
      const raw = localStorage.getItem(this.KEY);
      if (!raw) return [];
      const data = JSON.parse(raw) as ITransction[];
      return data.map(t => ({
        ...t,
        transictionDate: new Date(t.transictionDate)
      }));
    } catch {
      return [];
    }
  }
}
