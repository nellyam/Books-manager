export class Book {

  private _id: number;
  private _title: string;
  private _author: string;
  private _description: string;
  private _status: string;

  static nextId = 1;

  constructor(title: string, author: string, description: string, status:string) {
    this._id = Book.nextId;
    this._title = title;
    this._author = author;
    this._description = description;
    this._status = status;

    Book.nextId++;

  }

  get id():number {
    return this._id;
 }


 get title():string {
  return this._title;
}

 set title(value: string) {
 this._title= value;
 }


 get author():string {
  return this._author;
}

 set author(value: string) {
 this._author= value;
 }

 get description():string {
  return this._description;
}

 set description(value: string) {
 this._description = value;
 }

 get status():string {
  return this._status;
}

 set status(value: string) {
 this._status = value;
 }

}
