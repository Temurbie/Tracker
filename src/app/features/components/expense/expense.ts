import { Component, inject, OnInit, signal } from '@angular/core';
import { TrasictionSerivce } from '../../../shared/services/transiction.service';
import { DatePipe } from '@angular/common';
import { ChangeBgColorDirectiveTs } from '../../../shared/change-bg-color-directive.ts';



@Component({
  selector: 'app-expense',
  imports: [DatePipe,  ChangeBgColorDirectiveTs],
  templateUrl: './expense.html',
  styleUrl: './expense.css',
})
export class Expense implements OnInit{

  trService = inject(TrasictionSerivce)
  last5 = this.trService.last5;
  type = signal<string>('')
  ngOnInit(): void {
    console.log(this.trService.last5());
  }

  delete(id:string){
    this.trService.remove(id)
    
  }
}
