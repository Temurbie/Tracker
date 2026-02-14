import { Component, computed, inject, OnInit } from '@angular/core';
import { UserService } from '../../../shared/services/user.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [DatePipe],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {
  ngOnInit(): void {
    console.log(this.userNameLiter());
    
  }
  private route = inject(Router)
  private userService = inject(UserService);
  public currentUser = this.userService.currentUser
  public userNameLiter = computed(()=> this.currentUser()?.nickName.charAt(0).toUpperCase())

  logOut(){
    this.userService.logOutUser();
    this.route.navigateByUrl('')
  }
}
