import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {AuthService} from '../../services/auth/auth.service';

@Component({
  selector: 'app-auth-view',
  templateUrl: './auth-view.component.html',
  styleUrls: ['./auth-view.component.css']
})
export class AuthViewComponent implements OnInit {
  authForm: FormGroup;
  errMessage: string;

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.authForm = this.formBuilder.group({
      'email': ['', [Validators.email, Validators.required]],
      'password':  ['', [Validators.required]]
    }
    );
  }

  /**
   * Method called when the user clicks on sign-in button
   */

   onSubmitSignIn() {
     const email = this.authForm.value.email;
     const password = this.authForm.value.password;

    this.authService.signIn(email, password)
    .then(() => {
      this.router.navigate(['books']);
    })
    .catch((error) => {
      this.errMessage = error;
    })
  }


}
