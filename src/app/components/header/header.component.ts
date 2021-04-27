

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  isAuth: boolean;
  user: User;
  userSubscription: Subscription;
  constructor(private authService: AuthService, private router:Router) { }

  ngOnInit(): void {
    this.isAuth = this.authService.isAuth;
    this.userSubscription = this.authService.getUserAuth().subscribe((user: User) => {
      this.user = user;
    });

  }

  /**
   * Method called when the user clicks on sign-out button
   */
  onClickSignOut() {
      this.authService.signOut();
      this.router.navigate(['auth']);
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

}
