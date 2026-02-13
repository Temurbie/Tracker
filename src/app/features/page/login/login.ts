import { Component, inject } from '@angular/core';
import { UserService } from '../../../shared/services/user.service';
import { IUser } from '../../../shared/interface/user.interface';
import {v4 as uuidv4} from 'uuid'
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
onSubmit() {
throw new Error('Method not implemented.');
}

  private userSerivcce = inject(UserService);
  private fb = inject(FormBuilder);

  userForm =this.fb.group({
    nickName: ['', Validators.required, Validators.minLength(5)],
    birthDate: ['']
  })

  loginUser(){
    const model: IUser ={
      id : uuidv4(),
      nickName:this.userForm.value.nickName,
      regDate: this.userForm.value.birthDate,
      year: 1997

    }
    this.userSerivcce.loginUser(model);
  }

}
