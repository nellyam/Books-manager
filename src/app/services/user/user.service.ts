import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: Array<User>;

  constructor() {
    this.users = [];
    this.users.push(new User("Thomas", "Chevalier", "nellynellyam@gmail.com", "azerty"));
    this.users.push(new User("Admin", "Admin", "admin@gmail.fr", "azerty"));
   }

   /**
    *Search user by fieldname and the value
    */
   getUserBy(searchedAttr, searchedValue): User {

    for(const user of this.users) {
      if(user[searchedAttr] == searchedValue) {
        return user;
      }
    }
    return null;
   }

   /**
    *Method to edit a user
    * @param editedUser
    */
   editUser(editedUser: User) {
       for(let i = 0; i < this.users.length - 1; i++) {
         if(this.users[i].id == editedUser.id) {
          this.users[i] = editedUser;
         }
       }
   }
}
