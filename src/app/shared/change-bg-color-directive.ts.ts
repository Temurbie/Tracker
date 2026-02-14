import { Directive, effect, ElementRef, HostBinding, inject, input } from '@angular/core';

@Directive({
  selector: '[appChangeBgColorDirectiveTs]',
})
export class ChangeBgColorDirectiveTs{

  el =inject(ElementRef)

  type = input<string>();
  @HostBinding('class')
  hostClass = '';
  
  constructor() { 
    effect(()=>{
      const value = this.type();

      value === 'income' ? this.hostClass = 'bg-green-300 rounded-2xl p-2' : this.hostClass = 'bg-red-300 p-2 rounded-2xl'
    
  }
    )
    console.log(this.el);
    
  }
}

