import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-profil-view',
  templateUrl: './profil-view.component.html',
  styleUrls: ['./profil-view.component.css']
})
export class ProfilViewComponent implements OnInit, OnDestroy {
  user: User;
  userSubscription: Subscription;

  userForm: FormGroup;

  constructor(private userService: UserService,
              private formBuilder: FormBuilder, private router: Router,
              private authService: AuthService
    ) { }

  ngOnInit(): void {
    this.userSubscription = this.authService.getUserAuth().subscribe((user: User) => {
      this.user = user;
    });

    this.userForm = this.formBuilder.group({
      'firstname': ['', [Validators.required]],
      'lastname':  ['', [Validators.required]],
      'email':     ['', [Validators.email, Validators.required]],
      'password':  ['', [Validators.required]]
    });
  }



  onSubmitEditUser() {
    this.userService.editUser(this.user);
    this.router.navigate(['books']);
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

}
