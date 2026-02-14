import { Component, computed, effect, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ITransction, transctionType } from '../../../shared/interface/transcition.interface';
import {v4 as uuidv4} from 'uuid'
import { TrasictionSerivce } from '../../../shared/services/transiction.service';

@Component({
  selector: 'app-tranisction-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './tranisction-form.html',
  styleUrl: './tranisction-form.css',
})
export class TranisctionForm {

  private fb = inject(FormBuilder);
  private trService = inject(TrasictionSerivce)

  transitionForm = this.fb.group({
    tanlov: ['choose', Validators.required],
    income: [null, Validators.required],
    expense: [null, Validators.required],
    catigory: ['', Validators.required],
    paymentMethod: ['', Validators.required, Validators.minLength(5)],
    comment: ['']
  });

  get tanlov() { return this.transitionForm.get('tanlov'); }
  get catigory() { return this.transitionForm.get('catigory'); }
  get income() { return this.transitionForm.get('income'); }
  get expense() { return this.transitionForm.get('expense'); }
  get comment () {return this.transitionForm.get('comment')}

  reset() {
    this.transitionForm.reset({
      tanlov: 'choose',
      income: null,
      expense: null,
      catigory: '',
      paymentMethod: '',
      comment : ''
    });
  }

  submit() {
    if (this.transitionForm.invalid) {
      this.transitionForm.markAllAsTouched();
      return;
    }

    const raw = this.tanlov?.value;
    if(raw !== 'income' && raw !== 'expense'){
      return;
    }
    const tanlov : transctionType = raw;
    const model:ITransction = {
      type: tanlov, 
      amount: tanlov === 'income' ? Number(this.income?.value) : Number(this.expense?.value),
      catigory: String(this.catigory?.value,),
      paymentMethod: String(this.transitionForm.get('paymentMethod')?.value),
      transictionDate: new Date(),
      id : uuidv4(),
      comment: this.comment?.value ?? ''
      
    };

    this.trService.add(model);
    console.log('FORM COMMENT:', this.comment?.value);
    console.log('MODEL:', model);

    
    this.reset();
  }
}
