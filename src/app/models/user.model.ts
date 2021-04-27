export class User {

  private _id: number;
  private _firstname:string;
  private _lastname:string;
  private _email:string;
  private _password:string;

  static nextId = 1;

  constructor(firstname: string, lastname: string, email: string, password:string) {
    this._id = User.nextId;
    this._firstname = firstname;
    this._lastname = lastname;
    this._email = email;
    this._password = password;

    User.nextId++;

  }

   get id():number {
    return this._id;
 }

  get firstname():string {
     return this._firstname;
  }



 set id(value: number) {
  this._id = value;
}

  set firstname(value: string) {
   this._firstname = value;
 }

  get lastname():string {
    return this._lastname;
 }

 set lastname(value: string) {
  this._lastname = value;
}

 get email():string {
  return this._email;
}

set email(value: string) {
  this._email = value;
}

get password():string {
  return  this._password;
}

set password(value: string) {
  this._password = value;
}
}
