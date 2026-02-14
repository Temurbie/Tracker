import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  route = inject(Router)

  userService = inject(UserService);
  isUserLogined = this.userService.isUserLogined;

  logOut(){
    this.userService.logOutUser();
    this.route.navigateByUrl("")
  }
}
