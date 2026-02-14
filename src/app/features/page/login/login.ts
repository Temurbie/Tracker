import { Component, inject } from '@angular/core';
import { UserService } from '../../../shared/services/user.service';
import { IUser } from '../../../shared/interface/user.interface';
import {v4 as uuidv4} from 'uuid'
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {


  private userSerivcce = inject(UserService);
  private fb = inject(FormBuilder);
  private route = inject(Router)

  userForm =this.fb.group({
    nickName: ['', [Validators.required, Validators.minLength(5)]],
    birthDate: ['']
  })


  onSubmit() { 
    if(this.userForm.invalid){
      this.userForm.markAllAsTouched();
      return
    }
    const model: IUser ={
      id : uuidv4(),
      nickName:this.userForm.value.nickName!,
      regDate: Date.now(),
      year: Number(this.userForm.value.birthDate)

    }
    this.userSerivcce.loginUser(model);
    this.route.navigateByUrl('/expense')
}

get f(){
  return this.userForm.controls;
}

}
