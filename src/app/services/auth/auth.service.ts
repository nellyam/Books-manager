import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuth = false;
  userAuth: BehaviorSubject<User>;

  constructor(private userService: UserService) {
    this.userAuth = new BehaviorSubject<User>(null);
  }

  /**
   * Method to sign-in a user
   */
  signIn(email : string, password: string) {
    return new Promise((res, rej) => {
      setTimeout(() => {
        const user = this.userService.getUserBy("email", email);
        if(user) {
          //check mdp
          if(user.password === password) {
              this.isAuth = true;
              this.userAuth.next(user);
              res("");
          } else {
            rej("Le mot de passe est incorrect");
          }

        }
        rej("Adresse email n'existe pas");

      }, 2000)
    })
  }

   /**
   *Method to sign-out a user
   */
  signOut() {
    this.isAuth = false;
    this.userAuth.next(null);
  }

  /**
   * Method to return the current userAuth value
   */
  getUserAuth(): Observable<User> {
    return this.userAuth;
  }

}
